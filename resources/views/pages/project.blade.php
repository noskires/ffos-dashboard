
<!--begin::Entry-->
<div class="d-flex flex-column-fluid">

	<!--begin::Container-->
	<div class="container">
 

		<!--[html-partial:begin:{"id":"demo3/dist/inc/view/demos/pages/index","page":"index"}]/-->

		<!--[html-partial:begin:{"id":"demo1/dist/inc/view/partials/content/dashboards/demo3","page":"index"}]/-->

		<!--begin::Dashboard-->

    
        <div class="form-group row  d-flex flex-row-reverse">

            <!-- <div class="col-lg-3">
                <select class="form-control" id="selectA" name="" ng-model="BillingCtrl.field_force" 
                    ng-change="BillingCtrl.select_field_force(BillingCtrl.field_force)">
                    <option value="">Field Forces</option>
                    <option value="FF1">FF1</option>
                    <option value="FF2">FF2</option>
                </select>
            </div> -->

            <div class="col-lg-3">
                <!-- <select class="form-control" id="selectB" name="" ng-model="BillingCtrl.division"
                    ng-change="BillingCtrl.select_division(BillingCtrl.division)">
                    <option value="">Division</option>
                    <option value="NFS_WESTNL">West NL</option>
                    <option value="NFS_EASTNL">East NL</option>
                    <option value="NFS_CENTRALNL">Central NL</option>
                </select> -->
            </div>

            <div class="col-lg-3"> 
                <!-- <select class="form-control" id="selectA" name="" ng-model="BillingCtrl.selected_year"
                    ng-change="BillingCtrl.select_year(BillingCtrl.selected_year)">
                    <option value="">Year</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select> -->
            </div>

			<div class="col-lg-3">
               
            </div>

			<div class="col-lg-12" style="margin-top:-10;">
                DASHBOARD > NLFFOS > <b><u>PRIMARY AND SECONDARY PROJECTS</u> </b>
            </div>
            
        </div>


        <div class="row">
			<div class="col-xl-4">
				<!--begin::Stats Widget 4-->
				<div class="card card-custom card-stretch gutter-b">
					<!--begin::Header-->
					<div class="card-header border-0 pt-6">
						<h3 class="card-title align-items-start flex-column">
							<span class="card-label font-weight-bolder font-size-h4 text-dark-75"># PRIMARY REBUILD PROJECT</span>
                            <span class="text-muted mt-3 font-weight-bold font-size-lg">AS OF SEPTEMBER 04, 2021</span>
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-90 warning"><%ProjectCtrl.primary_rebuild_summary.completed%>/<%ProjectCtrl.primary_rebuild_summary.overall%></div>
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
							<span class="card-label font-weight-bolder font-size-h4 text-dark-75"># PRIMARY REHAB PROJECT</span>
							<span class="text-muted mt-3 font-weight-bold font-size-lg">AS OF SEPTEMBER 04, 2021</span>
                            
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-200"><%ProjectCtrl.primary_rehab_summary.completed%>/<%ProjectCtrl.primary_rehab_summary.overall%></div>
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
                        <span class="card-label font-weight-bolder font-size-h4 text-dark-75"># SECONDARY REHAB PROJECT</span>
                        <span class="text-muted mt-3 font-weight-bold font-size-lg">AS OF SEPTEMBER 04, 2021</span>
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-75"><%ProjectCtrl.secondary_rehab_summary.completed%>/<%ProjectCtrl.secondary_rehab_summary.overall%></div>
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
                <!--begin::Header-->
                <div class="card-header h-auto">
                    <!--begin::Title-->
                    <div class="card-title py-5">
                        <h3 class="card-label">PRIMARY REBUILD</h3>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Header-->
                <div class="card-body">
                    <!--begin::Chart-->
                    <div apexcharts options="ProjectCtrl.primary_rebuild"></div>
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
                        <h3 class="card-label">PRIMARY REHAB</h3>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Header-->
                <div class="card-body">
                    <!--begin::Chart-->
                    <div apexcharts options="ProjectCtrl.primary_rehab"></div>
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
                        <h3 class="card-label">SECONDARY REHAB</h3>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Header-->
                <div class="card-body">
                    <!--begin::Chart-->
                    <div apexcharts options="ProjectCtrl.secondary_rehab"></div>
                    <!--end::Chart-->
                </div>
            </div>
            <!--end::Card-->
        </div>
        
    </div>

    
    


    

<!--  -->

<!-- annotation -->
<!--         
<div class="row">   
        <div class="col-lg-12"> 
            <div class="card card-custom gutter-b"> 
                <div class="card-header h-auto"> 
                    <div class="card-title py-5">
                        <h3 class="card-label">ANNOTATION</h3>
                    </div> 
                </div> 
                <div class="card-body"> 
                    <%ProjectCtrl.secondary_rehab%> 
                    <div apexcharts options="ProjectCtrl.annotation"></div> 
                </div>
            </div> 
        </div>
        
    </div> -->

        
 
 
</div>

<!--end::Entry-->