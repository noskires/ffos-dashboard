<!--begin::Page Controller-->

<?php
	$page = NULL;
	if(isset($_GET['page'])){
		$page = $_GET['page'];
	}
?>

<!--end::Page Controller-->

<!--begin::Main-->

		@include("partials/_header-mobile")
		<div class="d-flex flex-column flex-root">

			<!--begin::Page-->
			<div class="d-flex flex-row flex-column-fluid page">

				<!--begin::Wrapper-->
				<div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">

					@include("partials/_header")

					<!-- include("partials/_subheader") -->

					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">

						<?php //include("partials/_breadcrumbs") ?>
						
						<?php
							// if($page == 'index' || $page == ''){
							// 	include('partials/_content');
							// } else {
							// 	include('pages/'.$page.'');
							// }
						?>

						<div ui-view> </div>

						
						<script type="text/ng-template" id="registration.view">
							@include('pages.patient-registration')
						</script>

						<script type="text/ng-template" id="foc.view">
							@include('pages.content')
						</script>
						
						<script type="text/ng-template" id="division.view">
							@include('pages.content_division')
						</script>
						
						<script type="text/ng-template" id="section.view">
							@include('pages.content_section')
						</script>

						<script type="text/ng-template" id="project_update.view">
							@include('pages.project_update')
						</script>

						<script type="text/ng-template" id="poi.view">
							@include('pages.poi')
						</script>

						<script type="text/ng-template" id="transport.view">
							@include('pages.transport')
						</script>

						<script type="text/ng-template" id="access.view">
							@include('pages.access')
						</script>

						<script type="text/ng-template" id="foc.inventory.view">
							@include('pages.foc_inventory')
						</script>
						
						<script type="text/ng-template" id="billing.fc.view">
							@include('pages.billing_fc')
						</script>

						<script type="text/ng-template" id="billing.fh.view">
							@include('pages.billing_fh')
						</script>

						<script type="text/ng-template" id="scorecard.fc.view">
							@include('pages.scorecard_fc')
						</script>

						<script type="text/ng-template" id="scorecard.fh.view">
							@include('pages.scorecard_fh')
						</script>

						<script type="text/ng-template" id="secondary.mttr.view">
							@include('pages.secondary_mttr')
						</script>

						<script type="text/ng-template" id="patient.view">
							@include('pages.patient-list')
						</script>

					</div>

					<!--end::Content-->

					@include("partials/_footer")
				</div>

				<!--end::Wrapper-->
			</div>

			<!--end::Page-->
		</div>

		<!--end::Main-->