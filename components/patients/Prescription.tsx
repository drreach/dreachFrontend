import Image from "next/image";
import React from "react";

const Prescription = () => {
	return (
		<div className="tab-pane fade show active" id="pres">
			<div className="text-right">
				<a href="add-prescription.html" className="add-new-btn">
					Add Prescription
				</a>
			</div>
			<div className="card card-table mb-0">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-hover table-center mb-0">
							<thead>
								<tr>
									<th>Date </th>
									<th>Name</th>
									<th>Created by </th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>14 Nov 2019</td>
									<td>Prescription 1</td>
									<td>
										<h2 className="table-avatar">
											<a
												href="doctor-profile.html"
												className="avatar avatar-sm mr-2">
												<Image
													className="avatar-img rounded-circle"
													src="assets/img/doctors/doctor-thumb-01.jpg"
													alt="User Image"
													width={150}
													height={150}
												/>
											</a>
											<a href="doctor-profile.html">
												Dr. Ruby Perrin <span>Dental</span>
											</a>
										</h2>
									</td>
									<td className="text-right">
										<div className="table-action">
											<a
												href="javascript:void(0);"
												className="btn btn-sm bg-primary-light">
												<i className="fas fa-print" /> Print
											</a>
											<a
												href="javascript:void(0);"
												className="btn btn-sm bg-info-light">
												<i className="far fa-eye" /> View
											</a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prescription;
