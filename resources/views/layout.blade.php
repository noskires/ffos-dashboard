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