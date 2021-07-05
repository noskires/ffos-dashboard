<!-- begin::Entry -->
<div class="d-flex flex-column-fluid">
<!--begin::Container-->
<div class="container">
	<!--begin::Card-->
	<div class="card card-custom gutter-b">
		<div class="card-header">
			<div class="card-title">
				<span class="card-icon">
					<i class="fas fa-users text-primary"></i>
				</span>
				<h3 class="card-label">FOC</h3>
			</div>
			<div class="card-toolbar">
				<a href="?page=patient-registration" class="btn btn-primary btn-primary--icon font-weight-bolder">
				    <i class="fas fa-user-plus"></i> New Record
				</a>
			</div>
		</div>
		<div class="card-body">
			<!--begin: Search Form-->
			<form class="mb-5">
				<div class="row mb-8">
					<div class="col-lg-4 mb-lg-0 mb-6">
						
						<div class="input-daterange input-group" id="kt_datepicker">
							<input type="text" class="form-control datatable-input" name="start" placeholder="From" data-col-index="5" />
							<div class="input-group-append">
								<span class="input-group-text">
									<i class="la la-ellipsis-h"></i>
								</span>
							</div>
							<input type="text" class="form-control datatable-input" name="end" placeholder="To" data-col-index="5" />
						</div>
					</div>
					<div class="col-lg-2 mb-lg-0 mb-6">
						
						<select class="form-control datatable-input" data-col-index="6">
							<option value="">All Status</option>
							<option value="">Assigned</option>
							<option value="">Not Yet Assigned</option>
						</select>
					</div>
					<div class="col-lg-3 mb-lg-0 mb-6">
						<select class="form-control datatable-input" data-col-index="7">
							<option value="">All Patient Type</option>
							<option value="">Member</option>
							<option value="">Dependent</option>
							<option value="">Non-Member</option>
						</select>
					</div>
					<div class="col-lg-3 mb-lg-0">
						<button class="btn btn-light-primary btn-primary--icon" id="">
							<span>&nbsp;<i class="la la-search"></i><span></span></span>
						</button>&#160;&#160;
						<button class="btn btn-secondary btn-secondary--icon" id="">
							<span>&nbsp;<i class="la la-refresh"></i><span></span></span>
						</button>
					</div>
				</div>
			</form>
			<!--end: Search Form-->

<!-- chart -->
            <div class="row">
                <div class="col-lg-6">
                    <!--begin::Card-->
                    <div class="card card-custom gutter-b">
                        <div class="card-header">
                            <div class="card-title">
                                <h3 class="card-label">Mixed Chart</h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <!--begin::Chart-->
                            <div id="chart_5"></div>
                            <!--end::Chart-->
                        </div>
                    </div>
                    <!--end::Card-->
                </div>
            </div>
        <!-- chart -->

            <!-- <table datatable="" class="table table-separate table-head-custom table-checkable table-hover" dt-options="EmployeesCtrl.dtOptions" dt-columns="EmployeesCtrl.dtColumns"  ></table> -->
            <table class="table table-separate table-head-custom">
				<thead>
					<tr>
						<th>FIELD FORCE</th>
						<th ng-repeat="foc in EmployeesCtrl.foc track by $index">
                            <%foc.foc.per_month[$index].month%>
                        </th>
                        <th>YTD</th>
			 
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="foc in EmployeesCtrl.foc">
						<td nowrap="nowrap"><%foc.foc.per_month[0].new_node_owner%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[0].avg_duration%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[1].avg_duration%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[2].avg_duration%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[3].avg_duration%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[4].avg_duration%></td>
						<td nowrap="nowrap"><%foc.foc.ytd[0].avg_duration%></td>
					</tr> 
                </tbody>
			</table>

            <br>

            <table class="table table-separate table-head-custom">
				<thead>
					<tr>
						<th>FIELD FORCE</th>
						<th ng-repeat="foc in EmployeesCtrl.foc track by $index">
                            <%foc.foc.per_month[$index].month%>
                        </th>
                        <th>YTD</th>
			 
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="foc in EmployeesCtrl.foc">
						<td nowrap="nowrap"><%foc.foc.per_month[0].new_node_owner%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[0].total_ticket%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[1].total_ticket%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[2].total_ticket%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[3].total_ticket%></td>
						<td nowrap="nowrap"><%foc.foc.per_month[4].total_ticket%></td>
						<td nowrap="nowrap"><%foc.foc.ytd[0].total_ticket%></td>
					</tr> 
                </tbody>
			</table>

		</div>
	</div>
	<!--end::Card-->
</div>
<!--end::Container-->
</div>
<!--end::Entry-->