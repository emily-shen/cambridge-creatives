import React from "react";


const PageHeader: React.FC<{title: string, description: string}> = ({title, description}) => {
  return <div className="h-fit bg-cc-teal pt-32 pb-16">
    <div className="w-full max-w-5xl mx-auto px-4 lg:px-0">
      <h1>{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  </div>
}

export default PageHeader;