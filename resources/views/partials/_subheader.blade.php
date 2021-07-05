
<!--begin::Subheader-->
					<div class="subheader bg-white h-100px" id="kt_subheader">
						<div class="container flex-wrap flex-sm-nowrap">

							<!--begin::Logo-->
							<div class="d-none d-lg-flex align-items-center flex-wrap w-250px">

								<!--begin::Logo-->
								<a href="?page=index">
									<img alt="Logo" src="{{URL::to('public/assets/media/logos/logo-4.png')}}" />
									<!-- <img alt="Logo" src="assets/media/logos/logo-4.png" class="max-h-40px" /> -->
								</a>

								<!--end::Logo-->
							</div>

							<!--end::Logo-->

							<!--begin::Nav-->
							<div class="subheader-nav nav flex-grow-1">

								<!--begin::Item-->
								<a href="?page=patient-registration" class="nav-item <?php //if($_GET['page'] == 'patient-registration'){echo 'active';} ?>">
									<span class="nav-label px-10">
										<span class="nav-title text-dark-75 font-weight-bold font-size-h4">Registration</span>
										<span class="nav-desc text-muted">Patient Enlistment</span>
									</span>
								</a>

								<!--end::Item-->

								<!--begin::Item-->
								<a href="?page=patient-list" class="nav-item <?php //if($_GET['page'] == 'patient-list'){echo 'active';} ?>">
									<span class="nav-label px-10">
										<span class="nav-title text-dark-75 font-weight-bold font-size-h4">Patients</span>
										<span class="nav-desc text-muted">Database</span>
									</span>
								</a>

								<!--end::Item-->

								<!--begin::Item-->
								<a href="#" class="nav-item">
									<span class="nav-label px-10">
										<span class="nav-title text-dark-75 font-weight-bold font-size-h4">Profiling</span>
										<span class="nav-desc text-muted">Health Screening</span>
									</span>
								</a>

								<!--end::Item-->

								<!--begin::Item-->
								<a href="#" class="nav-item">
									<span class="nav-label px-10">
										<span class="nav-title text-dark-75 font-weight-bold font-size-h4">Consultation</span>
										<span class="nav-desc text-muted">Evaluation</span>
									</span>
								</a>

								<!--end::Item-->

								<!--begin::Item-->
								<a href="#" class="nav-item">
									<span class="nav-label px-10">
										<span class="nav-title text-dark-75 font-weight-bold font-size-h4">Medication</span>
										<span class="nav-desc text-muted">Prescriptions</span>
									</span>
								</a>

								<!--end::Item-->
							</div>

							<!--end::Nav-->
						</div>
					</div>

					<!--end::Subheader-->