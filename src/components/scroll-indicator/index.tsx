import { useEffect, useState } from "react";
import "./styles.css";

type ScrollIndicatorProps = {
  url: string;
};

const ScrollIndicator = ({ url }: ScrollIndicatorProps) => {
  const [data, setData] = useState([]);
  const [scrollPositon, setScrollPostion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const body = await res.json();
      if (body && body.products && body.products.length > 0) {
        const titles = body.products.map(
          (prod: { title: string }) => prod.title
        );
        setData(titles);
      }
    } catch (err: unknown) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const elm = document.scrollingElement;
      const height = (elm?.scrollHeight ?? 0) - (elm?.clientHeight ?? 0);
      const currScroll = document.scrollingElement?.scrollTop ?? 0;
      setScrollPostion(Math.ceil((currScroll / height) * 100));
    };

    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    loadData();
  }, [url]);

  if (errMsg) {
    return <p>Error: {errMsg}</p>;
  }

  if (loading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Custom Scroll Indicator</h1>
        <div className="bar">
          <div
            className="progress-bar"
            style={{ width: `${scrollPositon}%` }}
          ></div>
        </div>
      </div>

      <div className="scroll">
        {data.map((t, index) => (
          <p key={index}>{t}</p>
        ))}
      </div>

      <button className="to-top">Scroll To Top</button>
    </div>
  );
};

export default ScrollIndicator;
