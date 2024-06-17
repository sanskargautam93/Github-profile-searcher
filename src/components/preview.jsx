import jsPDF from "jspdf";
import React from "react";

function Preview({
  avatarUrl,
  name,
  login,
  public_repos,
  followers,
  following,
  location,
  blog,
  twitter,
  email,
  isLoading,
  bio,
  joinedAt,
}) {
  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text(`Github Profile: ${name}`, 10, 20);

    doc.setLineWidth(0.5);
    doc.setDrawColor(100, 100, 100);
    doc.line(10, 25, 200, 25);

    doc.addImage(avatarUrl, "JPEG", 10, 30, 50, 50);

    doc.setFillColor(230, 230, 250);
    doc.rect(10, 95, 190, 50, "F");

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Name: ${name}`, 15, 105);
    doc.text(`Login: ${login}`, 15, 115);
    doc.text(`Joined At: ${joinedAt}`, 15, 125);
    doc.text(`Bio: ${bio}`, 15, 135);

    doc.setFontSize(16);
    doc.setTextColor(60, 60, 60);
    doc.text("Statistics", 10, 150);

    doc.setFillColor(240, 240, 250);
    doc.rect(10, 155, 190, 30, "F");

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Repos: ${public_repos}`, 15, 165);
    doc.text(`Followers: ${followers}`, 65, 165);
    doc.text(`Following: ${following}`, 115, 165);

    doc.setFontSize(16);
    doc.setTextColor(60, 60, 60);
    doc.text("Contact Information", 10, 190);

    doc.setFillColor(250, 250, 250);
    doc.rect(10, 195, 190, 30, "F");

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Location: ${location || "Not Found"}`, 15, 205);
    doc.text(`Blog: ${blog || "Not Found"}`, 15, 215);
    doc.text(`Twitter: ${twitter || "Not Found"}`, 115, 205);
    doc.text(`Email: ${email || "Not Found"}`, 115, 215);

    doc.save(`${login}_profile.pdf`);
  };
  return (
    <div className="bg-dark-gray p-10 flex text-white justify-center rounded-md ">
      {!isLoading ? (
        <div className="flex flex-col gap-4">
          <div className="flex gap-10 items-center">
            <div>
              <img className="w-28 rounded-full" src={avatarUrl} alt="image" />
            </div>
            <div>
              <h1>{name}</h1>
              <h3 className="text-dark-blue">{login}</h3>
              <p>Joined at {joinedAt}</p>
            </div>
          </div>
          <div>
            <p className="max-w-xs">{bio}</p>
          </div>
          <div className="flex  bg-dark-bg p-3 gap-10 rounded-md ">
            <div>
              <a
              href={`https://github.com/${login}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-white"
              >
                <h3>Repos</h3>
                <span>{public_repos}</span>
              </a>
            </div>
            <div>
              <h3>Followers</h3>
              <span>{followers}</span>
            </div>
            <div>
              <h3>Following</h3>
              <span>{following}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-evenly">
              <div className="flex gap-5 items-center ">
                <span>
                  {" "}
                  <svg
                    viewBox="0 0 500 1000"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                  </svg>
                </span>
                <span>{location ? location : "Not Found"}</span>
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  {" "}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </span>
                <span>{twitter ? twitter : "Not Found"}</span>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="flex gap-5 items-center ">
                <span>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
                  </svg>
                </span>
                <span>{blog ? blog : "Not Found"}</span>
              </div>
              <div className="flex gap-5 items-center ">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M18 8l-8 5-8-5V6l8 5 8-5m0-2H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m6 3h-2v6h2V7m0 8h-2v2h2v-2z" />
                  </svg>
                </span>
                <span>{email ? email : "Not Found"}</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-2 py-2 rounded-md flex items-center gap-2"
          >
            Download PDF
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="rounded-full h-4 w-4 border animate-spin border-dark-blue border-t-transparent"></div>
      )}
    </div>
  );
}

export default Preview;
