import React, { useState, useEffect } from "react";
import "./dash.css";
import { Image, Button } from "react-bootstrap";
import Aditya from "../../assests/aditya.svg";
import Search from "../../assests/searchicon.png";
import Bell from "../../assests/bellicon.png";
import Img1 from "../../assests/img_1.png";
import Img2 from "../../assests/img_2.png";
import Img3 from "../../assests/img_3.png";
import Jasraj from "../../assests/jasraj.svg";
import Ojhan from "../../assests/ojhan.png";
import Mulay from "../../assests/mulay.svg";
import Filter from "../../assests/filter.png";
import Tarun from "../../assests/tarun.svg";
import ProgressBar from "react-bootstrap/ProgressBar";

function Dashboard() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [am, setAm] = useState("AM");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      setHour(hours);
      setMinute(minutes);
      setDay(day);
      setMonth(month);
      setYear(year);
      if (hours > 12) {
        setAm("PM");
        setHour(hours - 12);
      } else {
        setAm("AM");
        setHour(hours);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="searchParent ">
      <div className="searchuser">
        <div className="amigo" style={{ width: "70%" }}>
          <Image
            src={Search}
            height="20px"
            style={{ marginRight: "10px", paddingBottom: "2px" }}
          />
          <input
            type="text"
            placeholder="Search users, Payments"
            className="search-input"
            style={{ width: "85%" }}
          />
        </div>
        <div className="user">
          <div>
            <Image src={Aditya} height="30px" />
          </div>
          <div className="admins">
            <span>Aditya Singh</span>
            <span>Admin</span>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Image src={Bell} height="30px" />
          </div>
        </div>
      </div>

      <div className="last_thirty_transaction">
        <div className="last_thirty" style={{ width: "70%" }}>
          <div className="bold">in the last 30 Days,</div>
          <div className="images">
            <Image src={Img1} height="80px" />
            <Image src={Img2} height="80px" />
            <Image src={Img3} height="80px" />
          </div>
        </div>
        <div className="recent">
          <div className="boldcenter">Recent Transactions</div>
          <table cellPadding="4">
            <tbody>
              <tr>
                <td>
                  <Image src={Jasraj} height="30px" />
                </td>
                <td>Jasraj</td>
                <td>40K+ sales</td>
                <td>$1.4m revenue</td>
              </tr>
              <tr>
                <td>
                  <Image src={Ojhan} height="30px" />
                </td>
                <td>Ojhan</td>
                <td>40K+ sales</td>
                <td>$1.4m revenue</td>
              </tr>
              <tr>
                <td>
                  <Image src={Mulay} height="30px" />
                </td>
                <td>Mulay</td>
                <td>40K+ sales</td>
                <td>$1.4m revenue</td>
              </tr>
            </tbody>
          </table>
          <div className="button">
            <Button variant="success">view all users</Button>
          </div>
        </div>
      </div>

      <div className="allUserSearchFilter">
        <div className="alluser" style={{ width: "35%" }}>
          <div className="bold">All users</div>
          <div>Monitor sales, transactions, etc.</div>
        </div>
        <div className="searchTrx">
          <div className="searchbox">
            <Image src={Search} height="15px" style={{ marginRight: "10px" }} />
            <input
              type="text"
              placeholder="Search transactions"
              className="search-input"
              style={{ width: "85%", border: "none" }}
            />
          </div>
        </div>
        <div>
          <div className="filter">
            <Image src={Filter} height="20px" />
            <span>Filter</span>
          </div>
        </div>
      </div>

      <div className="tabletrx">
        <div className="taable" style={{ width: "65%" }}>
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Status</th>
                <th>Ratings</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src={Mulay} height="30px" />
                  <span className="boldtable">Mulay</span>
                </td>
                <td className="verified">
                  <span style={{ background: "#DEEDE5", padding: "5px" }}>
                    verified
                  </span>
                </td>
                <td className="">
                  <div style={{width:'70%',padding:'5px'}}>
                  <ProgressBar now={40}  label = {"40%"}variant="dark"/>
                  </div>
                </td>
                <td>400</td>
                <td>$1.4m</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <Image src={Tarun} height="30px" />
                  <span className="boldtable">Tarun</span>
                </td>
                <td className="pending">
                  <span style={{ background: "#FDF8CE", padding: "5px" }}>
                    verified
                  </span>
                </td>
                <td className="">
                  <div style={{width:'70%',padding:'5px'}}>
                  <ProgressBar now={57}  label = {"57%"}variant="dark"/>
                  </div>
                </td>
                <td>200</td>
                <td>$1.4m</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <Image src={Jasraj} height="30px" />
                  <span className="boldtable">Jasraj</span>
                </td>
                <td className="verified">
                  <span style={{ background: "#DEEDE5", padding: "5px" }}>
                    verified
                  </span>
                </td>
                <td className="">
                  <div style={{width:'70%',padding:'5px'}}>
                  <ProgressBar now={89}  label = {"89%"}variant="dark"/>
                  </div>
                </td>
                <td>40,000</td>
                <td>$1.4m</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <Image src={Jasraj} height="30px" />
                  <span className="boldtable">Lakshay</span>
                </td>
                <td className="unverified">unverified</td>
                <td>No Ratings available</td>
                <td>0</td>
                <td>$1.4m</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <Image src={Jasraj} height="30px" />
                  <span className="boldtable">Aditya</span>
                </td>
                <td className="verified">
                  <span style={{ background: "#DEEDE5", padding: "5px" }}>
                    verified
                  </span>
                </td>
                <td className="">
                  <div style={{width:'70%',padding:'5px'}}>
                  <ProgressBar now={50}  label = {"50%"}variant="dark"/>
                  </div>
                </td>
                <td>30</td>
                <td>$1.4m</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <Image src={Ojhan} height="30px" />
                  <span className="boldtable">Ojha</span>
                </td>
                <td className="pending">
                  <span style={{ background: "#FDF8CE", padding: "5px" }}>
                    verified
                  </span>
                </td>
                <td className="">
                  <div style={{width:'70%',padding:'5px'}}>
                  <ProgressBar now={64}  label = {"64%"}variant="dark"/>
                  </div>
                </td>
                <td>400</td>
                <td>$1.4m</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="high">
          <div className="boldcenter">Highest Transactions</div>
          <table cellpadding="4">
            <tbody>
              <tr>
                <td>
                  <Image src={Jasraj} height="30px" />
                </td>
                <td>Jasraj</td>
                <td>40K+ sales</td>
                <td>$1.4m revenue</td>
              </tr>
              <tr>
                <td>
                  <Image src={Ojhan} height="30px" />
                </td>
                <td>Ojhan</td>
                <td>40K+ sales</td>
                <td>$1.4m revenue</td>
              </tr>
              <tr>
                <td>
                  <Image src={Mulay} height="30px" />
                </td>
                <td>Mulay</td>
                <td>40K+ sales</td>
                <td>$1.4m revenue</td>
              </tr>
            </tbody>
          </table>
          <div className="button">
            <Button variant="success">view all users</Button>
          </div>
        </div>
      </div>

      <div className="pagDate">
        <div className="pag">
          <div style={{ paddingTop: "10px" }}>previous page</div>
          <div className="numbers">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
          <div className="bold" style={{ paddingTop: "10px" }}>
            Next page
          </div>
        </div>
        <div className="datee">
          <div className="timecss">
            <div className="hour">{hour}</div>
            <span className="bold">:</span>
            <div className="minute">{minute}</div>
            <div className="ampm">{am}</div>
            <div className="day">
              {day}/{month}/{year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
