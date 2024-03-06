import React, {useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import ajaxAccounts from "../../util/remote/ajaxAccounts";
import {Link} from "react-router-dom";
import AddAccount from "./AddAccount";

function ListAccount() {
  const [accountList, setAccountListing] = useState(false);

  const listAccount = async () => {
    const server_response = await ajaxAccounts.fetchAccount();
    if (server_response.status === "OK") {
      setAccountListing(false);
    }
  };

  useEffect(() => {
    listAccount();
  }, []);

  return (
    <AppContainer title={"Accounts Management "}>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="card height-auto">
            <AddAccount />
          </div>
        </div>
        <div className="col-lg-8 col-md-8">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>All Accounts Data</h3>
                </div>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false">
                    ...
                  </Link>
                </div>
              </div>
              <form className="mg-b-20">
                <div className="row gutters-8">
                  <div className="col-xl-9 col-lg-9 col-9 form-group">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                    />
                  </div>
                  <div className=" col-xl-3 col-lg-3 col-3 form-group">
                    <button
                      type="submit"
                      className="btn-fill-lmd radius-30 text-light shadow-dodger-blue bg-dodger-blue">
                      SEARCH
                    </button>
                  </div>
                </div>
              </form>
              <div className="table-responsive">
                <table className="table display data-table text-nowrap">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input checkAll"
                          />
                          <label className="form-check-label">ID</label>
                        </div>
                      </th>
                      <th>Account Code</th>
                      <th>Description</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">#0021</label>
                        </div>
                      </td>
                      <td>Male</td>
                      <td>Businessman</td>

                      <td>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false">
                            <span className="flaticon-more-button-of-three-dots"></span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#">
                              <i className="fas fa-times text-orange-red"></i>
                              Close
                            </Link>
                            <Link className="dropdown-item" to="">
                              <i className="fas fa-cogs text-dark-pastel-green"></i>
                              Edit
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">#0021</label>
                        </div>
                      </td>
                      <td className="text-center">
                        <img src="img/figure/student2.png" alt="school" />
                      </td>
                      <td>Mark Willy</td>

                      <td>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false">
                            <span className="flaticon-more-button-of-three-dots"></span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#">
                              <i className="fas fa-times text-orange-red"></i>
                              Close
                            </Link>
                            <Link className="dropdown-item" to="/rate/edit">
                              <i className="fas fa-cogs text-dark-pastel-green"></i>
                              Edit
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default ListAccount;
