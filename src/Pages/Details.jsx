import React from "react";

const Details = () => {
  return (
    <div className="container details-container">
      <div className="main-menu">
        <h6>
          Projects{" "}
          <span className="text-muted">
            {" "}
            <small>&gt;</small> GSE Banking App
          </span>
        </h6>

        <div className="menu-icons">
          <p className="menu-icons-p">
            <span>
              <i class="bi bi-chat-left-text-fill"></i>
            </span>
            <span>
              <i class="bi bi-bell-fill"></i>
            </span>
            <span> |</span>
            <span>RonasIT</span>
            <span>
              <i class="bi bi-chevron-down"></i>
            </span>
          </p>
        </div>
      </div>

      <div className="second-row">
        <div>
          <h3>GSE Banking App</h3>

          <div className="second-row-div">
            <div className="text-muted">56%</div>
            <div class="progress" style={{ height: "5px", width: "100px" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "56px" }}
                aria-valuenow="56"
              ></div>
            </div>
          </div>
        </div>

        <div className="second-row-second">
          <div>
            <a href="#">
              <i class="bi bi-plus"></i> Invite
            </a>
          </div>
          <div>
            <span className="second-row-second-p">
              <i class="bi bi-person-circle pers1"></i>
            </span>
            <span className="second-row-second-p">
              <i class="bi bi-person-circle pers2"></i>
            </span>
            <span className="second-row-second-p">
              <i class="bi bi-person-circle pers3"></i>
            </span>
            <span className="second-row-second-p">
              <i class="bi bi-person-circle pers4"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="third-row-menu">
        <div>
          <h5>
            February 2021{" "}
            <span>
              <i class="bi bi-chevron-left"></i>
            </span>
            <span>
              <i class="bi bi-chevron-right"></i>
            </span>
          </h5>
        </div>

        <div className="second-div">
          <div>
            <i class="bi bi-search"></i>
          </div>
          <div>
            <select>
              <option value="">Month</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
