import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = (props) => {
  console.log(props);
  // const id = props.match.params.id;
  const { id } = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            ullam, non obcaecati adipisci cum omnis accusantium totam aut
            tempora inventore iure, labore libero nihil sint! Iusto vel nobis
            illo voluptatum!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Insho</div>
          <div>3rd June, 1987</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
