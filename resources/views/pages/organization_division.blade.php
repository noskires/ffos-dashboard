<!-- begin::Entry -->
<div class="d-flex flex-column-fluid">
<!--begin::Container-->
<div class="container">
	<!--begin::Card-->
	<div class="card card-custom gutter-b">
		 

        <div class="card-header">
            <div class="card-title">
                <!-- <span class="card-icon">
                    <i class="fas fa-users text-primary"></i>
                </span> -->
                <h3 class="card-label">List Division</h3>
            </div>
            <div class="card-toolbar">
                <a href="#" ng-click="OrganizationDivisionCtrl.add()" class="btn btn-primary btn-primary--icon font-weight-bolder">
                    <!-- <i class="fas fa-user-plus"></i>  -->
                    New Record
                </a>
            </div>
        </div>
		<div class="card-body">

            <table datatable="" class="table table-separate table-head-custom table-checkable table-hover" dt-options="OrganizationDivisionCtrl.dtOptions" dt-columns="OrganizationDivisionCtrl.dtColumns"  ></table>

		</div>
	</div>
	<!--end::Card-->
</div>
<!--end::Container-->
</div>
<!--end::Entry-->


<script type="text/ng-template" id="edit-organization-division-modal">
    <form  method="POST">
    @csrf
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Details</h5>
                <button type="button" class="close" ng-click="OrganizationDivisionCtrl.close()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            

            <div class="modal-body">

            <br>

            <!-- <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Code</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Code" ng-model="OrganizationDivisionCtrl.collection.division_code">
                </div>
            </div> -->
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Division</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Division" ng-model="OrganizationDivisionCtrl.collection.division_name">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Center</label>
                <div class="col-sm-9">
                    <select class="form-control datatable-input" ng-model="OrganizationDivisionCtrl.collection.center_code">
                        <option value=""> SELECT </option>
                        <option ng-repeat="center_list in OrganizationDivisionCtrl.center_list" ng-value="center_list.center_code"><%center_list.center_name%></option>
                    </select>
                </div>
            </div>

            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="OrganizationDivisionCtrl.close()">Close</button>
                <button type="button" class="btn btn-primary" ng-click="OrganizationDivisionCtrl.updateDetailsBtn(OrganizationDivisionCtrl.collection)">Update changes</button>
            </div>
        </div>
    </form>

</script>

<script type="text/ng-template" id="add-organization-division-modal">
    <form  method="POST">
    @csrf
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New Record</h5>
                <button type="button" class="close" ng-click="OrganizationDivisionCtrl.close()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            

            <div class="modal-body">

            <br>

            <!-- <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Code</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Code" ng-model="OrganizationDivisionCtrl.collection.division_code">
                </div>
            </div> -->
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Division</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Division" ng-model="OrganizationDivisionCtrl.collection.division_name">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Center</label>
                <div class="col-sm-9">
                    <select class="form-control datatable-input" ng-model="OrganizationDivisionCtrl.collection.center_code">
                        <option value=""> SELECT </option>
                        <option ng-repeat="center_list in OrganizationDivisionCtrl.center_list" ng-value="center_list.center_code"><%center_list.center_name%></option>
                    </select>
                </div>
            </div>

            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="OrganizationDivisionCtrl.close()">Close</button>
                <button type="button" class="btn btn-primary" ng-click="OrganizationDivisionCtrl.addDetailsBtn(OrganizationDivisionCtrl.collection)">Add</button>
            </div>
        </div>
    </form>

</script>