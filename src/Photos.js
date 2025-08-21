import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
        {props.photos.map(function(photo, index) {   
          return (
           <div className="col-4 pt-2 pb-2" key={index}> <a href={photo.src.landscape} target="_blank" rel="noreferrer" ><img
              key={index}
              src={photo.src.landscape}           
              alt={photo.alt}
              className="img-fluid"         
            />
            </a>
            </div>
          );
        })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
