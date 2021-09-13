
<!--begin::Entry-->
<div class="d-flex flex-column-fluid">

	<!--begin::Container-->
	<div class="container">

        <div class="form-group row  d-flex flex-row-reverse">

            <!-- <div class="col-lg-3">
                <select class="form-control" id="selectA" name="" ng-model="ScoreCardCtrl.field_force" 
                    ng-change="ScoreCardCtrl.select_field_force(ScoreCardCtrl.field_force)">
                    <option value="">Field Forces</option>
                    <option value="FF1">FF1</option>
                    <option value="FF2">FF2</option>
                </select>
            </div> -->

			

			

            <div class="col-lg-3">
                <!-- <select class="form-control" id="selectB" name="" ng-model="ScoreCardCtrl.division"
                    ng-change="ScoreCardCtrl.select_division(ScoreCardCtrl.division)">
                    <option value="">Division</option>
                    <option value="NFS_WESTNL">West NL</option>
                    <option value="NFS_EASTNL">East NL</option>
                    <option value="NFS_CENTRALNL">Central NL</option>
                </select> -->
            </div>

            <div class="col-lg-3"> 
                <!-- <select class="form-control" id="selectA" name="" ng-model="ScoreCardCtrl.selected_year"
                    ng-change="ScoreCardCtrl.select_year(ScoreCardCtrl.selected_year)">
                    <option value="">Year</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select> -->
            </div>

			<div class="col-lg-3">
               
            </div>

			<div class="col-lg-12" style="margin-top:-10;">
                DASHBOARD > NLFFOS > <b><u>SCORECARD (FC)</u> </b>
            </div>
            
        </div>

		<!--[html-partial:begin:{"id":"demo3/dist/inc/view/demos/pages/index","page":"index"}]/-->

		<!--[html-partial:begin:{"id":"demo1/dist/inc/view/partials/content/dashboards/demo3","page":"index"}]/-->

		<!--begin::Dashboard-->

		<!--begin::Row-->
 

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
                        <div class="" apexcharts options="ScoreCardCtrl.overall_status"></div>
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
                        <div class="" apexcharts options="ScoreCardCtrl.west_status"></div>
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
                        <div class="" apexcharts options="ScoreCardCtrl.east_status"></div>
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
                        <div class="" apexcharts options="ScoreCardCtrl.central_status"></div>
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
                        <h5 class="card-label">FC 2Q Scorecard per Field Force </h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <!--begin::Chart-->
                        <div class="" apexcharts options="ScoreCardCtrl.scorecard_fc"></div>
                        <!--end::Chart-->
                    </div>
                </div>
                <!--end::Card-->
            </div>
        </div>

    </div>

</div>
 
<!--end::Entry-->