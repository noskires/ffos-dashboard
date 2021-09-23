 

<!--begin::Entry-->
<div class="d-flex flex-column-fluid">

	<!--begin::Container-->
	<div class="container">

        <div class="row">
			<div class="col-xl-12">

 
				<!--begin::Stats Widget 4-->
				<div class="card card-custom card-stretch gutter-b">
					<!--begin::Header-->
					<div class="card-header border-0 pt-6">
						<h3 class="card-title align-items-start flex-column">
							<span class="card-label font-weight-bolder font-size-h4 text-dark-75">PRIMARY AND SECONDARY PROJECTS</span> 
						</h3>
						<div class="card-toolbar">
							<div class="font-weight-bolder font-size-h1 text-dark-90 warning"></div>
						</div>
					</div>
					<!--end::Header-->
					<!--begin::Body-->
					<div class="card-body p-0 h-125px">
                    <form action="{{ route('import') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="file" name="file" class="form-control">
                        <br>
                        <button class="btn btn-success">Import</button>
                        <a class="btn btn-secondary" href="#" ng-click="ProjectCtrl.download_projects()">Export</a>
                    </form>
					</div>
					<!--end::Body-->
				</div>
				<!--end::Stats Widget 4-->
			</div>
		 
        </div>
    </div>
</div>


        
