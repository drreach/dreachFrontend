import Image from "next/image";
import React from "react";

interface DashInfo {
	totalAppointments: number;
	totalPendingAppointments: number;
	totalApprovedAppointments: number;
	totalRejectedAppointments: number;
	totalTodayAppointments: number;
}
const DashInfo = ({ data }: { data: DashInfo }) => {
	return (
		<div className="row">
			<div className="col-md-12">
				<div className="card dash-card">
					<div className="card-body">
						<div className="row">
							<div className="col-md-12 col-lg-4">
								<div className="dash-widget dct-border-rht">
									<div className="circle-bar circle-bar1">
										<div className="circle-graph1" data-percent={75}>
											<Image
												src="/assets/doctor-1.jpg"
												className="img-fluid"
												alt="patient"
												width={150}
												height={150}
											/>
										</div>
									</div>
									<div className="dash-widget-info">
										<h6>Total Patient</h6>
										<h3>{data.totalApprovedAppointments}</h3>
										<p className="text-muted">Till Today</p>
									</div>
								</div>
							</div>
							<div className="col-md-12 col-lg-4">
								<div className="dash-widget dct-border-rht">
									<div className="circle-bar circle-bar2">
										<div className="circle-graph2" data-percent={65}>
											<Image
												src="/assets/icon-02.png"
												className="img-fluid"
												alt="Patient"
												width={150}
												height={150}
											/>
										</div>
									</div>
									<div className="dash-widget-info">
										<h6>Today Appointments</h6>
										<h3>{data.totalTodayAppointments}</h3>
										<p className="text-muted">06, Nov 2019</p>
									</div>
								</div>
							</div>
							<div className="col-md-12 col-lg-4">
								<div className="dash-widget">
									<div className="circle-bar circle-bar3">
										<div className="circle-graph3" data-percent={50}>
											<Image
												src="assets/img/icon-03.png"
												className="img-fluid"
												alt="Patient"
												width={150}
												height={150}
											/>
										</div>
									</div>
									<div className="dash-widget-info">
										<h6>Total Appoinments</h6>
										<h3>{data.totalAppointments}</h3>
										<p className="text-muted">06, Apr 2019</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashInfo;
