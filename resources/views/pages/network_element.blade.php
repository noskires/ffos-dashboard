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
                <h3 class="card-label">Network Elements Per FF</h3>
            </div>
            <div class="card-toolbar">
                <a href="#" ng-click="NetworkElementsCtrl.add()" class="btn btn-primary btn-primary--icon font-weight-bolder">
                    <!-- <i class="fas fa-user-plus"></i>  -->
                    New Record
                </a>
            </div>
        </div>
		<div class="card-body">

            <table datatable="" class="table table-separate table-head-custom table-checkable table-hover" dt-options="NetworkElementsCtrl.dtOptions" dt-columns="NetworkElementsCtrl.dtColumns"  ></table>

		</div>
	</div>
	<!--end::Card-->
</div>
<!--end::Container-->
</div>
<!--end::Entry-->


<script type="text/ng-template" id="edit-network-element-modal">
    <form  method="POST">
    @csrf
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Details</h5>
                <button type="button" class="close" ng-click="NetworkElementsCtrl.close()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            

            <div class="modal-body">

            <br>

            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">FFS</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Code" ng-model="NetworkElementsCtrl.collection.section_code">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">No of NE</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="No. of NE" ng-model="NetworkElementsCtrl.collection.no_of_ne">
                </div>
            </div>

            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="NetworkElementsCtrl.close()">Close</button>
                <button type="button" class="btn btn-primary" ng-click="NetworkElementsCtrl.updateDetailsBtn(NetworkElementsCtrl.collection)">Update changes</button>
            </div>
        </div>
    </form>

</script>

<script type="text/ng-template" id="add-network-element-modal">
    <form  method="POST">
    @csrf
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New Record</h5>
                <button type="button" class="close" ng-click="NetworkElementsCtrl.close()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">

            <br>

            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">FFS</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Code" ng-model="NetworkElementsCtrl.collection.section_code">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">No of NE</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="No. of NE" ng-model="NetworkElementsCtrl.collection.no_of_ne">
                </div>
            </div>

            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="NetworkElementsCtrl.close()">Close</button>
                <button type="button" class="btn btn-primary" ng-click="NetworkElementsCtrl.addDetailsBtn(NetworkElementsCtrl.collection)">Add</button>
            </div>
        </div>
    </form>

</script>