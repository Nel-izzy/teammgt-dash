import React from "react";
import Persons from "./Persons";

const Details = () => {
  return (
    <div className="container details-container">
      <div className="main-menu">
        <p>
          Projects{" "}
          <span className="text-muted">
            {" "}
            <small>&gt;</small> GSE Banking App
          </span>
        </p>

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
          <h6>GSE Banking App</h6>

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

      <div className="fourth-row">
        <p>
          T<span>11</span>
        </p>
        <p>
          F<span>12</span>
        </p>
        <p>
          S<span>13</span>
        </p>
        <p>
          S<span>14</span>
        </p>
        <p>
          M<span>15</span>
        </p>
        <p>
          T<span>16</span>
        </p>
        <p>
          W<span>17</span>
        </p>
        <p>
          T<span>18</span>
        </p>
        <p>
          F<span>19</span>
        </p>
        <p className="s20">
          S<span>20</span>
          <span className="dot"></span>
          <span className="line"></span>
        </p>
        <p>
          S<span>21</span>
        </p>
        <p>
          M<span>22</span>
        </p>
        <p>
          T<span>23</span>
        </p>
        <p>
          W<span>24</span>
        </p>
        <p>
          T<span>25</span>
        </p>
        <p>
          F<span>26</span>
        </p>
        <p>
          S<span>27</span>
        </p>
      </div>

      <Persons />
    </div>
  );
};

export default Details;
