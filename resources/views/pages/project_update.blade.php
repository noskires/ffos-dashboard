
<!--begin::Entry-->
<div class="d-flex flex-column-fluid">

	<!--begin::Container-->
	<div class="container">
 

		<!--[html-partial:begin:{"id":"demo3/dist/inc/view/demos/pages/index","page":"index"}]/-->

		<!--[html-partial:begin:{"id":"demo1/dist/inc/view/partials/content/dashboards/demo3","page":"index"}]/-->

		<!--begin::Dashboard-->

  
      
        
    <div class="row">   
        <div class="col-lg-12">
            <!--begin::Card-->
            <div class="card card-custom gutter-b">
                <!--begin::Header-->
                <div class="card-header h-auto">
                    <!--begin::Title-->
                    <div class="card-title py-5">
                        <h3 class="card-label">SECONDARY PROJECTS STATUS</h3>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Header-->
                <div class="card-body">
                    <!--begin::Chart-->
                    <div apexcharts options="StaticCtrl.stacked100"></div>
                    <!--end::Chart-->
                </div>
            </div>
            <!--end::Card-->
        </div>
        
    </div>



<!--  -->

<!-- annotation -->
        
<div class="row">   
        <div class="col-lg-12">
            <!--begin::Card-->
            <div class="card card-custom gutter-b">
                <!--begin::Header-->
                <div class="card-header h-auto">
                    <!--begin::Title-->
                    <div class="card-title py-5">
                        <h3 class="card-label">ANNOTATION</h3>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Header-->
                <div class="card-body">
                    <!--begin::Chart-->
                    <div apexcharts options="StaticCtrl.annotation"></div>
                    <!--end::Chart-->
                </div>
            </div>
            <!--end::Card-->
        </div>
        
    </div>

        
<!--  -->
        <!-- slider -->
        <div class="row">

			<div class="col-lg-12">
				<!--begin::Card-->
				<div class="card card-custom gutter-b">
					<div class="card-header">
						<div class="card-title">
							<h3 class="card-label">Modal</h3>
						</div>
					</div>
					<div class="card-body">
						<!--begin::Modal-->
						<!-- Button trigger modal-->
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
							Launch modal
						</button>

						<!-- Modal-->
						<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog modal-dialog-centered" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="exampleModalLabel">Image Slider</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<i aria-hidden="true" class="ki ki-close"></i>
										</button>
									</div>
									<div class="modal-body">
									<div class="card-body">
						<!--begin::Slider-->
						<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
								<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
								<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
								<img class="d-block w-100" alt="First slide" src="public/assets/media/logos/ffs/sample1.jpg" />
								<div class="carousel-caption d-none d-md-block">
									<h5>First Slide</h5>
									<p>Description</p>
								</div>
								</div>
								<div class="carousel-item">
								<img class="d-block w-100" src="public/assets/media/logos/ffs/Picture1.jpg" />
								<div class="carousel-caption d-none d-md-block">
									<h5>2nd Slide</h5>
									<p>Description</p>
								</div>
								</div>
								<div class="carousel-item">
								<img class="d-block w-100" src="public/assets/media/logos/ffs/sample3.png" />
								<div class="carousel-caption d-none d-md-block">
									<h5>3rd Slide</h5>
									<p>Description</p>
								</div>
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
						<!--end::Slider-->
					</div>
										
									</div>
									<!-- <div class="modal-footer">
										<button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary font-weight-bold">Save changes</button>
									</div> -->
								</div>
							</div>
						</div>
						<!--end::Modal-->
					</div>
				</div>
				<!--end::Card-->
			</div>
		</div>

		<div class="row">
            <div class="col-lg-6">
                <!--begin::Card-->
                <div class="card card-custom gutter-b">
                    <div class="card-header">
                        <div class="card-title">
                            <h3 class="card-label">Image </h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <!--begin::Slider-->
                        <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" alt="">
                        <!--end::Slider-->
                    </div>
                </div>
                <!--end::Card-->
            </div>
            <div class="col-lg-6">
                <!--begin::Card-->
                <div class="card card-custom gutter-b">
                    <div class="card-header">
                        <div class="card-title">
                            <h3 class="card-label">Image </h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <!--begin::Slider-->
                        <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" alt="">
                        <!--end::Slider-->
                    </div>
                </div>
                <!--end::Card-->
            </div>
	    </div>
	<!--end::Row-->

    <div class="row">
            <div class="col-lg-6">
                <!--begin::Card-->
                <div class="card card-custom gutter-b">
                    <div class="card-header">
                        <div class="card-title">
                            <h3 class="card-label">Image </h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <!--begin::Slider-->
                        <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" alt="">
                        <!--end::Slider-->
                    </div>
                </div>
                <!--end::Card-->
            </div>
            <div class="col-lg-6">
                <!--begin::Card-->
                <div class="card card-custom gutter-b">
                    <div class="card-header">
                        <div class="card-title">
                            <h3 class="card-label">Image </h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <!--begin::Slider-->
                        <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" alt="">
                        <!--end::Slider-->
                    </div>
                </div>
                <!--end::Card-->
            </div>
	    </div>
	<!--end::Row-->

	</div>

	<!--end::Container-->
</div>

<!--end::Entry-->