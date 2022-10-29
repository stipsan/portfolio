import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function OgImage() {
  const title = "hejsan";
  const description = "test";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          className="space-x-8 flex flex-row"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p>hejasn </p>
          <p>afdsad</p>
        </div>
      </div>
    ),
    //   <div className="w-[1200px] h-[630px] fixed top-0 left-0 bg-green-100 py-20 px-24 flex flex-col justify-between">
    //     {/* <div className="flex flex-row space-x-6">
    //       <Star />
    //       {title != "Alvar Lagerlöf" && (
    //         <h3 className="font-subheading font-medium text-primary text-[2.7em]">
    //           Alvar Lagerlöf
    //         </h3>
    //       )}
    //     </div> */}

    //     {/* <div className="space-y-2 flex">
    //       <h1 className="font-heading text-[7em] leading-[1.2]">{title}</h1>
    //       <h2 className="font-subheading text-[3.4em] leading-[1.3]">{description}</h2>
    //     </div> */}
    //   </div>
    {
      width: 1200,
      height: 600,
    }
  );
}

function Star() {
  return (
    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path
          d="M13.3687 1.29975C14.1659 0.175903 15.8341 0.175906 16.6313 1.29975L18.5934 4.06593C18.9971 4.63499 19.6681 4.95257 20.3641 4.90395L23.7952 4.66425C25.2027 4.56592 26.2668 5.91679 25.8415 7.26217L24.8914 10.2681C24.6715 10.9639 24.8479 11.7243 25.3518 12.252L27.5472 14.5514C28.534 15.585 28.1497 17.2902 26.8149 17.8006L23.7261 18.9816C23.058 19.2371 22.5772 19.8298 22.4651 20.5362L21.956 23.7432C21.7384 25.1142 20.2245 25.852 19.0106 25.1786L15.9701 23.4921C15.3667 23.1574 14.6333 23.1574 14.0299 23.4921L10.9894 25.1786C9.77549 25.852 8.2616 25.1142 8.04398 23.7432L7.53492 20.5362C7.42279 19.8298 6.94198 19.2371 6.27392 18.9816L3.18512 17.8006C1.85027 17.2902 1.46597 15.585 2.45284 14.5514L4.64817 12.252C5.15207 11.7243 5.32854 10.9639 5.10861 10.2681L4.15845 7.26217C3.73319 5.91679 4.79727 4.56592 6.20484 4.66425L9.63592 4.90395C10.3319 4.95257 11.0029 4.63499 11.4066 4.06593L13.3687 1.29975Z"
          fill="#15803D"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="30" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
