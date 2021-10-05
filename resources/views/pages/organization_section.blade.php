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
                <h3 class="card-label">List Sections</h3>
            </div>
            <div class="card-toolbar">
                <a href="#" ng-click="OrganizationSectionCtrl.add()" class="btn btn-primary btn-primary--icon font-weight-bolder">
                    <!-- <i class="fas fa-user-plus"></i>  -->
                    New Record
                </a>
            </div>
        </div>
		<div class="card-body">

            <table datatable="" class="table table-separate table-head-custom table-checkable table-hover" dt-options="OrganizationSectionCtrl.dtOptions" dt-columns="OrganizationSectionCtrl.dtColumns"  ></table>

		</div>
	</div>
	<!--end::Card-->
</div>
<!--end::Container-->
</div>
<!--end::Entry-->


<script type="text/ng-template" id="edit-organization-section-modal">
    <form  method="POST">
    @csrf
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Details</h5>
                <button type="button" class="close" ng-click="OrganizationSectionCtrl.close()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            

            <div class="modal-body">

            <br>

            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Code</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Code" ng-model="OrganizationSectionCtrl.collection.section_code">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Section</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Section" ng-model="OrganizationSectionCtrl.collection.section_name">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Division</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Division" ng-model="OrganizationSectionCtrl.collection.division_code">
                </div>
            </div>

            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="OrganizationSectionCtrl.close()">Close</button>
                <button type="button" class="btn btn-primary" ng-click="OrganizationSectionCtrl.updateDetailsBtn(OrganizationSectionCtrl.collection)">Update changes</button>
            </div>
        </div>
    </form>

</script>

<script type="text/ng-template" id="add-organization-section-modal">
    <form  method="POST">
    @csrf
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New Record</h5>
                <button type="button" class="close" ng-click="OrganizationSectionCtrl.close()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            

            <div class="modal-body">

            <br>

            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Code</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Code" ng-model="OrganizationSectionCtrl.collection.section_code">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Section</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Section" ng-model="OrganizationSectionCtrl.collection.section_name">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Division</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Division" ng-model="OrganizationSectionCtrl.collection.division_code">
                </div>
            </div>

            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="OrganizationSectionCtrl.close()">Close</button>
                <button type="button" class="btn btn-primary" ng-click="OrganizationSectionCtrl.addDetailsBtn(OrganizationSectionCtrl.collection)">Add</button>
            </div>
        </div>
    </form>

</script>