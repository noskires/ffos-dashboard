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
                <h3 class="card-label">FOC Inventory</h3>
            </div>
            <div class="card-toolbar">
                <a href="#" ng-click="FocInventoryCtrl.add()" class="btn btn-primary btn-primary--icon font-weight-bolder">
                    <!-- <i class="fas fa-user-plus"></i>  -->
                    New Record
                </a>
            </div>
        </div>
		<div class="card-body">

            <table datatable="" class="table table-separate table-head-custom table-checkable table-hover" dt-options="FocInventoryCtrl.dtOptions" dt-columns="FocInventoryCtrl.dtColumns"  ></table>

		</div>
	</div>
	<!--end::Card-->
</div>
<!--end::Container-->
</div>
<!--end::Entry-->


<script type="text/ng-template" id="edit-foc-inventory-modal">
    <form  method="POST">
    @csrf
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Details</h5>
                <button type="button" class="close" ng-click="FocInventoryCtrl.close()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            

            <div class="modal-body">

            <br>

            
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Section</label>
                <div class="col-sm-9">
                    <select class="form-control datatable-input" data-col-index="6" ng-model="FocInventoryCtrl.collection.section_code">
                        <option value=""> Select </option>
                        <option value="NFS_WESTNL_FFS1"> NFS_WESTNL_FFS1 </option>
                        <option value="NFS_WESTNL_FFS2"> NFS_WESTNL_FFS2 </option>
                        <option value="NFS_WESTNL_FFS3"> NFS_WESTNL_FFS3 </option>
                        <option value="NFS_EASTNL_FFS4"> NFS_EASTNL_FFS4 </option>
                        <option value="NFS_EASTNL_FFS5"> NFS_EASTNL_FFS5 </option>
                        <option value="NFS_CENTRALNL_FFS6"> NFS_CENTRALNL_FFS6 </option>
                        <option value="NFS_CENTRALNL_FFS7"> NFS_CENTRALNL_FFS7 </option>
                        <option value="NFS_CENTRALNL_FFS8"> NFS_CENTRALNL_FFS8 </option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Type</label>
                <div class="col-sm-9">
                    <select class="form-control datatable-input" data-col-index="6" ng-model="FocInventoryCtrl.collection.inventory_type">
                        <option value=""> Select </option>
                        <option value="DFON"> DFON </option>
                        <option value="IEF"> IEF </option>
                        <option value="FITL"> FITL </option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Foc Link</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="FOC Link" ng-model="FocInventoryCtrl.collection.foc_link">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Cable ID</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Cable ID" ng-model="FocInventoryCtrl.collection.cable_id">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Date Submitted</label>
                <div class="col-sm-9">
                    <input type="date" class="form-control" placeholder="Date Submitted" ng-model="FocInventoryCtrl.collection.date_submitted">
                </div>
            </div>

            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="FocInventoryCtrl.close()">Close</button>
                <button type="button" class="btn btn-primary" ng-click="FocInventoryCtrl.updateDetailsBtn(FocInventoryCtrl.collection)">Update changes</button>
            </div>
        </div>
    </form>

</script>

<script type="text/ng-template" id="add-foc-inventory-modal">
    <form  method="POST">
    @csrf
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New Record</h5>
                <button type="button" class="close" ng-click="FocInventoryCtrl.close()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            

            <div class="modal-body">

            <br>
 
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Section</label>
                <div class="col-sm-9">
                    <select class="form-control datatable-input" data-col-index="6" ng-model="FocInventoryCtrl.collection.section_code">
                        <option value=""> Select </option>
                        <option value="NFS_WESTNL_FFS1"> NFS_WESTNL_FFS1 </option>
                        <option value="NFS_WESTNL_FFS2"> NFS_WESTNL_FFS2 </option>
                        <option value="NFS_WESTNL_FFS3"> NFS_WESTNL_FFS3 </option>
                        <option value="NFS_EASTNL_FFS4"> NFS_EASTNL_FFS4 </option>
                        <option value="NFS_EASTNL_FFS5"> NFS_EASTNL_FFS5 </option>
                        <option value="NFS_CENTRALNL_FFS6"> NFS_CENTRALNL_FFS6 </option>
                        <option value="NFS_CENTRALNL_FFS7"> NFS_CENTRALNL_FFS7 </option>
                        <option value="NFS_CENTRALNL_FFS8"> NFS_CENTRALNL_FFS8 </option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Type</label>
                <div class="col-sm-9">
                    <select class="form-control datatable-input" data-col-index="6" ng-model="FocInventoryCtrl.collection.inventory_type">
                        <option value=""> Select </option>
                        <option value="DFON"> DFON </option>
                        <option value="IEF"> IEF </option>
                        <option value="FITL"> FITL </option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Foc Link</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="FOC Link" ng-model="FocInventoryCtrl.collection.foc_link">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Cable ID</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Cable ID" ng-model="FocInventoryCtrl.collection.cable_id">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Date Submitted</label>
                <div class="col-sm-9">
                    <input type="date" class="form-control" placeholder="Date Submitted" ng-model="FocInventoryCtrl.collection.date_submitted">
                </div>
            </div>

            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="FocInventoryCtrl.close()">Close</button>
                <button type="button" class="btn btn-primary" ng-click="FocInventoryCtrl.addDetailsBtn(FocInventoryCtrl.collection)">Add</button>
            </div>
        </div>
    </form>

</script>