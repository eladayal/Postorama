import React from "react";

interface WelcomeHeadlineProps {
  data: {
    headline: string;
  };
}

const WelcomeHeadline: React.FC<WelcomeHeadlineProps> = ({ data }) => {
  return <div className="text-center text-4xl font-bold" dangerouslySetInnerHTML={{ __html: data.headline }} />;
};

export default WelcomeHeadline;
