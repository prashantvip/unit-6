import React, { useState } from "react";

const Comments = ({ data }) => {
   console.log("data:", data);
   const [expand, setExpand] = useState(false);

   if (data.replies) {
      return (
         <div className="comment">
            <div className="topTOP">
               <div className="topSection">
                  <span
                     onClick={() => setExpand(!expand)}
                     style={{ cursor: "pointer", fontWeight: "bold" }}
                  >
                     {expand ? "-" : "+"}
                  </span>
                  <div> {data.author}</div>
                  <div> {data.points} points</div>
                  <div> {data.timestamp.split(" ").splice(4,1)}</div>
               </div>
               <div className="mainThread">
                  {data.body}
                  <br />
               </div>
               <div className="topSection">
                  <div>Reply</div>
                  <div>Give Award</div>
                  <div>Share</div>
                  <div>Report</div>
                  <div>Save</div>
               </div>
            </div>

            <div
               style={{ display: expand ? "block" : "none", paddingLeft: "5%" }}
            >
               {data.replies.map((item) => {
                  return <Comments data={item} />;
               })}
            </div>
         </div>
      );
   } else {
      return (
         <div className="topTOP" style={{ paddingLeft: "5px" }}>
            <div className="topSection">
               <div> {data.author}</div>
               <div> {data.points} points</div>       
               <div> {data.timestamp.split(" ").splice(4,1)}</div>
            </div>
            <div className="mainThread">
               {data.body}
               <br />
            </div>
            <div className="topSection">
               <div>Reply</div>
               <div>Give Award</div>
               <div>Share</div>
               <div>Report</div>
               <div>Save</div>
            </div>
         </div>
      );
   }
};

export default Comments;
