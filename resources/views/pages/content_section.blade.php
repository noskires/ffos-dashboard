
<!--begin::Entry-->
<div class="d-flex flex-column-fluid">

	<!--begin::Container-->
	<div class="container">

        <div class="form-group row  d-flex flex-row-reverse">
            <div class="col-lg-3">

                <select class="form-control"  name="" ng-model="SectionsCtrl.section" 
                    ng-change="SectionsCtrl.select_section(SectionsCtrl.selected_year, SectionsCtrl.division, SectionsCtrl.section)">
                    <option value="">Field Forces</option> 
                    <option ng-repeat="field_force in SectionsCtrl.field_forces_selected"><%field_force%></option>
                </select>
            </div>
            
            <div class="col-lg-3">
                <select class="form-control" id="selectB" name="" ng-model="SectionsCtrl.division"
                    ng-change="SectionsCtrl.select_division(SectionsCtrl.selected_year, SectionsCtrl.division, SectionsCtrl.section)">
                    <option value="">Division</option>
                    <option value="NFS_WESTNL">West NL</option>
                    <option value="NFS_EASTNL">East NL</option>
                    <option value="NFS_CENTRALNL">Central NL</option>
                </select>
            </div>

            <div class="col-lg-3">
                <select class="form-control" name="" ng-model="SectionsCtrl.selected_year"
                    ng-change="SectionsCtrl.select_year(SectionsCtrl.selected_year, SectionsCtrl.division, SectionsCtrl.section)">
                    <option value="">Year</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>

		<!--[html-partial:begin:{"id":"demo3/dist/inc/view/demos/pages/index","page":"index"}]/-->

		<!--[html-partial:begin:{"id":"demo1/dist/inc/view/partials/content/dashboards/demo3","page":"index"}]/-->

		<!--begin::Dashboard-->

		<!--begin::Row-->
		<div class="row">
			<div class="col-xl-3">
				<!--begin::Stats Widget 4-->
				<div class="card card-custom card-stretch gutter-b">
					<!--begin::Header-->
					<div class="card-header border-0 pt-6">
						<h3 class="card-title align-items-start flex-column">
							<span class="card-label font-weight-bolder font-size-h4 text-dark-75"> YTD NETWORK AVA</span>
							<!-- <span class="text-muted mt-3 font-weight-bold font-size-lg"><%SectionsCtrl.ytd_avg_duration_node | number:2%> NODE MTTR (SA)</span>
							<span class="text-muted mt-3 font-weight-bold font-size-lg"><%SectionsCtrl.ytd_avg_duration_foc | number:2%> FOC MTTR (SA)</span> -->
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-90 warning"><%SectionsCtrl.ytd_net_ava%>%</div>
						</div>
					</div>
					<!--end::Header-->
					<!--begin::Body-->
					<!-- <div class="card-body p-0 h-125px">
						<div id="kt_stats_widget_4_chart" class="card-rounded-bottom position-absolute bottom-0 w-100" style="height: 120px" data-color="primary"></div>
					</div> -->
					<!--end::Body-->
				</div>
				<!--end::Stats Widget 4-->
			</div>
			<div class="col-xl-3">
				<!--begin::Stats Widget 5-->
				<div class="card card-custom card-stretch gutter-b">
					<!--begin::Header-->
					<div class="card-header border-0 pt-6">
						<h3 class="card-title align-items-start flex-column">
							<span class="card-label font-weight-bolder font-size-h4 text-dark-75">YTD NODE MTTR</span>
							<!-- <span class="text-muted mt-3 font-weight-bold font-size-lg">Total tickets 100</span> 
							<span class="text-muted mt-3 font-weight-bold font-size-lg">Total duration 1207H</span> -->
                            
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-200"><%SectionsCtrl.ytd_avg_duration_node | number:2%></div>
						</div>
					</div>
					<!--end::Header-->
					<!--begin::Body-->
					<!-- <div class="card-body p-0 h-125px">
						<div id="kt_stats_widget_5_chart" class="card-rounded-bottom position-absolute bottom-0 w-100"></div>
					</div> -->
					<!--end::Body-->
				</div>
				<!--end::Stats Widget 5-->
			</div>
			<div class="col-xl-3">
				<!--begin::Stats Widget 6-->
				<div class="card card-custom card-stretch gutter-b">
					<!--begin::Header-->
					<div class="card-header border-0 pt-6">
						<h3 class="card-title align-items-start flex-column">
                        <span class="card-label font-weight-bolder font-size-h4 text-dark-75">YTD FOC MTTR</span>
                        <!-- <span class="text-muted mt-3 font-weight-bold font-size-lg">Total tickets 100</span> 
                        <span class="text-muted mt-3 font-weight-bold font-size-lg">Total duration 1207H</span> -->
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-75"><%SectionsCtrl.ytd_avg_duration_foc | number:2%></div>
						</div>
					</div>
					<!--end::Header-->
					<!--begin::Body-->
					<!-- <div class="card-body p-0 h-125px">
						<div id="kt_stats_widget_6_chart" class="card-rounded-bottom position-absolute bottom-0 w-100"></div>
					</div> -->
					<!--end::Body-->
				</div>
				<!--end::Stats Widget 6-->
			</div>
			<div class="col-xl-3">
				<!--begin::Stats Widget 6-->
				<div class="card card-custom card-stretch gutter-b">
					<!--begin::Header-->
					<div class="card-header border-0 pt-6">
						<h3 class="card-title align-items-start flex-column">
                            <span class="card-label font-weight-bolder font-size-h4 text-dark-75">TOTAL TICKETS</span>
                            <!-- <span class="text-muted mt-3 font-weight-bold font-size-lg">Total tickets 100</span> 
                            <span class="text-muted mt-3 font-weight-bold font-size-lg">Total duration 1207H</span> -->
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-75"><%(SectionsCtrl.ytd_total_ticket_node+SectionsCtrl.ytd_total_ticket_foc) | number:0%></div>
						</div>
					</div>
					<!--end::Header-->
					<!--begin::Body-->
					<!-- <div class="card-body p-0 h-125px">
						<div id="kt_stats_widget_6_chart" class="card-rounded-bottom position-absolute bottom-0 w-100"></div>
					</div> -->
					<!--end::Body-->
				</div>
				<!--end::Stats Widget 6-->
			</div>
		</div>

        

		<div class="row">

            <div class="col-lg-12">
				<!--begin::Card-->
				<div class="card card-custom gutter-b">
					<div class="card-header">
						<div class="card-title">
							<h3 class="card-label">2021 Data</h3>
						</div>
					</div>
					<div class="card-body">
						<!--begin::Chart-->
						<div apexcharts options="SectionsCtrl.kpi"></div>
						<!--end::Chart-->
					</div>
				</div>
				<!--end::Card-->
			</div>

 

           
		</div>


        <div class="row">

 

<div class="col-lg-6">
    <!--begin::Card-->
    <div class="card card-custom gutter-b">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">TOP 5 CONTRIBUTORS (NODE)</h3>
            </div>
        </div>
        <div class="card-body">
            <!--begin::Chart-->
            <div class="d-flex justify-content-center" apexcharts options="SectionsCtrl.top_contributors_node"></div>
            <!--end::Chart-->
        </div>
    </div>
    <!--end::Card-->
</div>

<div class="col-lg-6">
    <!--begin::Card-->
    <div class="card card-custom gutter-b">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">TOP 5 CONTRIBUTORS (FOC) </h3>
            </div>
        </div>
        <div class="card-body">
            <!--begin::Chart-->
            <!-- <div id="chart" class="d-flex justify-content-center"></div> -->
            <div class="d-flex justify-content-center" apexcharts options="SectionsCtrl.top_contributors_foc"></div>
            <!--end::Chart-->
        </div>
    </div>
    <!--end::Card-->
</div>
</div>

      
        
 
		

		<div class="row">
			<div class="col-lg-12">
				<!--begin::Card-->
				<div class="card card-custom gutter-b">
					<!--begin::Header-->
					<div class="card-header h-auto">
						<!--begin::Title-->
						<div class="card-title py-5">
							<h3 class="card-label">Line Chart</h3>
						</div>
						<!--end::Title-->
					</div>
					<!--end::Header-->
					<div class="card-body">
						<!--begin::Chart-->
						<div id="chart_1"></div>
						<!--end::Chart-->
					</div>
				</div>
				<!--end::Card-->
			</div>
			
		</div>

		<div class="row">
			<div class="col-lg-12">
				<!--begin::Card-->
				<div class="card card-custom gutter-b">
					<div class="card-header">
						<div class="card-title">
							<h3 class="card-label">Column Chart</h3>
						</div>
					</div>
					<div class="card-body">
						<!--begin::Chart-->
						<div id="chart_3"></div>
						<!--end::Chart-->
					</div>
				</div>
				<!--end::Card-->
			</div>
			
		</div>
		
		<!--end::Row-->

		<!--end::Dashboard-->






        <!-- slider -->
        <div class="row">
									

                                    
									<div class="col-lg-6">
										<!--begin::Card-->
										<div class="card card-custom gutter-b">
											<div class="card-header">
												<div class="card-title">
													<h3 class="card-label">Modal</h3>
												</div>
											</div>
											<div class="card-body">
												<!--begin::Modal-->
												<!-- Button trigger modal-->
												<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
												    Launch modal
												</button>

												<!-- Modal-->
												<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
												    <div class="modal-dialog modal-dialog-centered" role="document">
												        <div class="modal-content">
												            <div class="modal-header">
												                <h5 class="modal-title" id="exampleModalLabel">Image Slider</h5>
												                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
												                    <i aria-hidden="true" class="ki ki-close"></i>
												                </button>
												            </div>
												            <div class="modal-body">
                                                            <div class="card-body">
												<!--begin::Slider-->
												<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
													<ol class="carousel-indicators">
														<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
														<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
														<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
													</ol>
													<div class="carousel-inner">
														<div class="carousel-item active">
														<img class="d-block w-100" alt="First slide" src="public/assets/media/logos/ffs/sample1.jpg" />
														<div class="carousel-caption d-none d-md-block">
															<h5>First Slide</h5>
															<p>Description</p>
														</div>
														</div>
														<div class="carousel-item">
														<img class="d-block w-100" src="public/assets/media/logos/ffs/Picture1.jpg" />
														<div class="carousel-caption d-none d-md-block">
															<h5>2nd Slide</h5>
															<p>Description</p>
														</div>
														</div>
														<div class="carousel-item">
														<img class="d-block w-100" src="public/assets/media/logos/ffs/sample3.png" />
														<div class="carousel-caption d-none d-md-block">
															<h5>3rd Slide</h5>
															<p>Description</p>
														</div>
														</div>
													</div>
													<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
														<span class="carousel-control-prev-icon" aria-hidden="true"></span>
														<span class="sr-only">Previous</span>
													</a>
													<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
														<span class="carousel-control-next-icon" aria-hidden="true"></span>
														<span class="sr-only">Next</span>
													</a>
												</div>
												<!--end::Slider-->
											</div>
																
												            </div>
												            <!-- <div class="modal-footer">
												                <button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Close</button>
												                <button type="button" class="btn btn-primary font-weight-bold">Save changes</button>
												            </div> -->
												        </div>
												    </div>
												</div>
												<!--end::Modal-->
											</div>
										</div>
										<!--end::Card-->
									</div>
								</div>

	</div>

	<!--end::Container-->
</div>

<!--end::Entry-->