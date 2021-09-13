
<!--begin::Entry-->
<div class="d-flex flex-column-fluid">

	<!--begin::Container-->
	<div class="container">

        <div class="form-group row  d-flex flex-row-reverse">

            <!-- <div class="col-lg-3">
                <select class="form-control" id="selectA" name="" ng-model="FocInventoryCtrl.field_force" 
                    ng-change="FocInventoryCtrl.select_field_force(FocInventoryCtrl.field_force)">
                    <option value="">Field Forces</option>
                    <option value="FF1">FF1</option>
                    <option value="FF2">FF2</option>
                </select>
            </div> -->

			

			

            <div class="col-lg-3">
                <!-- <select class="form-control" id="selectB" name="" ng-model="FocInventoryCtrl.division"
                    ng-change="FocInventoryCtrl.select_division(FocInventoryCtrl.division)">
                    <option value="">Division</option>
                    <option value="NFS_WESTNL">West NL</option>
                    <option value="NFS_EASTNL">East NL</option>
                    <option value="NFS_CENTRALNL">Central NL</option>
                </select> -->
            </div>

            <div class="col-lg-3"> 
                <!-- <select class="form-control" id="selectA" name="" ng-model="FocInventoryCtrl.selected_year"
                    ng-change="FocInventoryCtrl.select_year(FocInventoryCtrl.selected_year)">
                    <option value="">Year</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select> -->
            </div>

			<div class="col-lg-3">
               
            </div>

			<div class="col-lg-3" style="margin-top:-120;">
				<a href="" class="text-dark-90" style="color:#000000;"> <b><h5>Date: {{ \Carbon\Carbon::now()->format('M d, Y H:i:s A') }}</h5> </b></a>
            </div>
            
        </div>

		<!--[html-partial:begin:{"id":"demo3/dist/inc/view/demos/pages/index","page":"index"}]/-->

		<!--[html-partial:begin:{"id":"demo1/dist/inc/view/partials/content/dashboards/demo3","page":"index"}]/-->

		<!--begin::Dashboard-->

		<!--begin::Row-->
		<div class="row">
			<div class="col-xl-4">
				<!--begin::Stats Widget 4-->
				<div class="card card-custom card-stretch gutter-b">
					<!--begin::Header-->
					<div class="card-header border-0 pt-6">
						<h3 class="card-title align-items-start flex-column">
							<span class="card-label font-weight-bolder font-size-h4 text-dark-75">OVERALL COMPLETION %</span> 
                             
							<span class="text-muted mt-3 font-weight-bold font-size-lg">AS OF 08/31/2021</span>
							<!-- <span class="text-muted mt-3 font-weight-bold font-size-lg"><%FocInventoryCtrl.ytd_avg_duration_foc | number:2%> FOC MTTR (SA)</span> -->
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-90 warning">54%</div>
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
			<div class="col-xl-4">
				<!--begin::Stats Widget 5-->
				<div class="card card-custom card-stretch gutter-b">
					<!--begin::Header-->
					<div class="card-header border-0 pt-6">
						<h3 class="card-title align-items-start flex-column">
							<span class="card-label font-weight-bolder font-size-h4 text-dark-75">TARGET FOC</span>
							<!-- <span class="text-muted mt-3 font-weight-bold font-size-lg">Total tickets 100</span> 
							<span class="text-muted mt-3 font-weight-bold font-size-lg">Total duration 1207H</span> -->
                            
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-200">344</div>
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
			<div class="col-xl-4">
				<!--begin::Stats Widget 6-->
				<div class="card card-custom card-stretch gutter-b">
					<!--begin::Header-->
					<div class="card-header border-0 pt-6">
						<h3 class="card-title align-items-start flex-column">
                        <span class="card-label font-weight-bolder font-size-h4 text-dark-75">COMPLETED FOC</span>
                        <!-- <span class="text-muted mt-3 font-weight-bold font-size-lg">Total tickets 100</span> 
                        <span class="text-muted mt-3 font-weight-bold font-size-lg">Total duration 1207H</span> -->
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-75">185</div>
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
            <div class="col-lg-3">
                <!--begin::Card-->
                <div class="card card-custom gutter-b">
                    <!-- <div class="card-header">
                        <div class="card-title">
                        <h3 class="card-label">CO ACCESS PM ACCOMPLISHMENT (SECTION LEVEL)</h3>
                        </div>
                    </div> -->
                    <div class="card-body">
                        <!--begin::Chart-->
                        <div class="" apexcharts options="FocInventoryCtrl.overall_status"></div>
                        <!--end::Chart-->
                    </div>
                </div>
                <!--end::Card-->
            </div>
            <div class="col-lg-3">
                <!--begin::Card-->
                <div class="card card-custom gutter-b">
                    <!-- <div class="card-header">
                        <div class="card-title">
                        <h3 class="card-label">CO ACCESS PM ACCOMPLISHMENT (SECTION LEVEL)</h3>
                        </div>
                    </div> -->
                    <div class="card-body">
                        <!--begin::Chart-->
                        <div class="" apexcharts options="FocInventoryCtrl.dfon_status"></div>
                        <!--end::Chart-->
                    </div>
                </div>
                <!--end::Card-->
            </div>
            <div class="col-lg-3">
                <!--begin::Card-->
                <div class="card card-custom gutter-b">
                    <!-- <div class="card-header">
                        <div class="card-title">
                        <h3 class="card-label">CO ACCESS PM ACCOMPLISHMENT (SECTION LEVEL)</h3>
                        </div>
                    </div> -->
                    <div class="card-body">
                        <!--begin::Chart-->
                        <div class="" apexcharts options="FocInventoryCtrl.ief_status"></div>
                        <!--end::Chart-->
                    </div>
                </div>
                <!--end::Card-->
            </div>
            <div class="col-lg-3">
                <!--begin::Card-->
                <div class="card card-custom gutter-b">
                    <!-- <div class="card-header">
                        <div class="card-title">
                        <h3 class="card-label">CO ACCESS PM ACCOMPLISHMENT (SECTION LEVEL)</h3>
                        </div>
                    </div> -->
                    <div class="card-body">
                        <!--begin::Chart-->
                        <div class="" apexcharts options="FocInventoryCtrl.fitl_status"></div>
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
                        <h3 class="card-label">Distribution per Division</h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <!--begin::Chart-->
                        <div class="" apexcharts options="FocInventoryCtrl.distribution_per_division"></div>
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
                        <h3 class="card-label">Distribution per Field Force</h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <!--begin::Chart-->
                        <div class="" apexcharts options="FocInventoryCtrl.distribution_per_section"></div>
                        <!--end::Chart-->
                    </div>
                </div>
                <!--end::Card-->
            </div>
        </div>

    </div>

</div>
 
<!--end::Entry-->