<!--begin::Entry-->
<div class="d-flex flex-column-fluid">
<!--begin::Container-->
<div class="container">
	<!--begin::Card-->
		<!--begin::Form-->
		<form class="form" id="kt_member_registration_form">
			<div class="card card-custom card-sticky" id="kt_page_sticky_card">
				<div class="card-header">
					<div class="card-title">
						<span class="card-icon">
							<i class="fas fa-user-plus text-primary"></i>
						</span>
						<h3 class="card-label">Patient Enlistment Form</h3>
					</div>
					<div class="card-toolbar">
						<!-- <button type="reset" class="btn btn-secondary mr-2">Clear</button>
						<button type="submit" class="btn btn-primary mr-5" id="submit_member_registration">Submit Form</button> -->

						<button type="submit" class="btn btn-primary btn-primary--icon mr-2 font-weight-bolder" id="submit_member_registration">
							<span><i class="fas fa-check-circle"></i><span>Submit Form</span></span>
						</button>
						<button type="reset" class="btn btn-secondary btn-secondary--icon" id="">
							<span><i class="far fa-times-circle"></i><span>Clear</span></span>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right pt-0">Patient Type:</label>
						<div class="col-lg-8">
							<div class="radio-inline">
								<label class="radio radio-solid">
								<input type="radio" name="patienttype" id="member" checked="checked" value="MM" />
								<span></span>Member</label>
								<label class="radio radio-solid">
								<input type="radio" name="patienttype" id="dependent" value="DD" />
								<span></span>Dependent</label>
								<label class="radio radio-solid">
								<input type="radio" name="patienttype" id="nonmember" value="NM" />
								<span></span>Non-Member</label>
							</div>
							<span class="form-text text-muted">Please select patient type</span>
						</div>
					</div>
					<!-- begin::dependent additional options -->
					<div class="form-group row dependenttype" style="display: none;">
						<label class="col-lg-2 col-form-label text-lg-right pt-0">Dependent Type:</label>
						<div class="col-lg-8">
							<div class="radio-inline">
								<label class="radio radio-solid">
								<input type="radio" class="dependenttype" name="dependenttype" id="dependenttype_default" checked="checked" value="1" />
								<span></span>Spouse</label>
								<label class="radio radio-solid">
								<input type="radio" class="dependenttype" name="dependenttype" value="2" />
								<span></span>Child</label>
								<label class="radio radio-solid">
								<input type="radio" class="dependenttype" name="dependenttype" value="3" />
								<span></span>Parent</label>
								<label class="radio radio-solid">
								<input type="radio" class="dependenttype" name="dependenttype" value="4" />
								<span></span>N/A</label>
							</div>
							<span class="form-text text-muted">Please select dependent type</span>
						</div>
					</div>
					<div class="form-group row dependenttype">
						<label class="col-lg-2 col-form-label text-lg-right pt-0"></label>
						<div class="col-lg-8">
							<div class="checkbox-inline">
								<label class="checkbox checkbox-outline checkbox-square">
								<input type="checkbox" id="withdisability" value="Y" />
								<span></span>Member's Dependent is with Disability</label>
								<label class="checkbox checkbox-outline checkbox-square">
								<input type="checkbox" id="withauthorization" value="Y" />
								<span></span>Presented with Letter of Authorization</label>
							</div>
						</div>
					</div>
					<!-- end::dependent additional options -->
					<div class="form-group row" id="pinform">
						<label class="col-lg-2 col-form-label text-lg-right">PIN:</label>
						<div class="col-lg-8">
							<input type="text" class="form-control letterspace_2 kt_inputmask_pin" id="pin1" name="pin1" autofocus="">
							<span class="form-text text-muted">Please enter your PhilHealth Identfication Number</span>
						</div>
					</div>

					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right">Last Name:</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" placeholder="" name="lname" />
						</div>
						<label class="col-lg-2 col-form-label text-lg-right">First Name:</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" placeholder="" name="fname" />
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right">Middle Name:</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" placeholder="" name="mname" />
						</div>
						<label class="col-lg-2 col-form-label text-lg-right">Extension Name:</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" placeholder="" name="exname" />
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right pt-0">Gender:</label>
						<div class="col-lg-3">
							<div class="radio-inline">
								<label class="radio radio-solid">
								<input type="radio" name="gender" checked="checked" value="M" />
								<span></span>Male</label>
								<label class="radio radio-solid">
								<input type="radio" name="gender" value="F" />
								<span></span>Female</label>
							</div>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right">Date of Birth:</label>
						<div class="col-lg-3">
							<input class="form-control letterspace_1" id="kt_inputmask_birthdate" type="text" name="birthdate" />
						</div>
						<label class="col-lg-2 col-form-label text-lg-right">Civil Status:</label>
						<div class="col-lg-3">
							<select class="form-control" name="civil_status">
								<option value="">Select</option>
                                <option value="S">Single</option>
                                <option value="M">Married</option>
                                <option value="W">Widowed</option>
                                <option value="X">Separated</option>
                                <option value="A">Annuled</option>
							</select>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right">Contact Number:</label>
						<div class="col-lg-3">
							<input type="text" class="form-control letterspace_1 kt_inputmask_cp" placeholder="" name="number" />
						</div>
						<label class="col-lg-2 col-form-label text-lg-right">Email:</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" placeholder="" name="email" />
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right">Province:</label>
						<div class="col-lg-3">
							<select class="form-control" id="kt_select2_province" name="province">
								<option value="">Select Provice</option>
								<option value="Cagayan">Cagayan</option>
								<option value="Isabela">Isabela</option>
							</select>
						</div>
						<label class="col-lg-2 col-form-label text-lg-right">City/Municipality:</label>
						<div class="col-lg-3">
							<select class="form-control" id="kt_select2_municipality" name="municipality">
								<option value="">Select City/Municipality</option>
								<option value="Tuguegarao">Tuguegarao</option>
								<option value="Santiago">Santiago</option>
							</select>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right">Barangay:</label>
						<div class="col-lg-3">
							<select class="form-control" id="kt_select2_barangay" name="barangay">
								<option value="">Select Barangay</option>
								<option value="Ugac">Ugac Norte</option>
								<option value="Carig">Carig</option>
							</select>
						</div>
						<label class="col-lg-2 col-form-label text-lg-right">Zipcode:</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" placeholder="" disabled="" />
						</div>
					</div>
					<!-- begin::dependent additional options 2 -->
					<div class="dependenttype" style="display: none;">
						<div class="separator separator-dashed my-10"></div>
						<div class="form-group row">
							<label class="col-lg-2 col-form-label text-lg-right pt-0"></label>
							<div class="col-lg-8">
								<h4 class="text-dark font-weight-bold">Principal Member Information</h4>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-2 col-form-label text-lg-right">PIN:</label>
							<div class="col-lg-8">
								<div class="input-group">
							     	<input type="text" class="form-control letterspace_2 kt_inputmask_pin" name="pin2" />
							     	<div class="input-group-append">
							      		<button class="btn btn-secondary" type="button" name="verifypin2">Verify PIN</button>
							     	</div>
						    	</div>
								<span class="form-text text-muted">Please enter the PhilHealth Identfication Number of the Principal Member</span>
							</div>
							

						</div>
						<div class="form-group row">
							<label class="col-lg-2 col-form-label text-lg-right">Last Name:</label>
							<div class="col-lg-3">
								<input type="text" class="form-control" disabled="" />
							</div>
							<label class="col-lg-2 col-form-label text-lg-right">First Name:</label>
							<div class="col-lg-3">
								<input type="text" class="form-control" disabled="" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-2 col-form-label text-lg-right">Middle Name:</label>
							<div class="col-lg-3">
								<input type="text" class="form-control" disabled="" />
							</div>
							<label class="col-lg-2 col-form-label text-lg-right">Extension Name:</label>
							<div class="col-lg-3">
								<input type="text" class="form-control" disabled="" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-2 col-form-label text-lg-right pt-0">Gender:</label>
							<div class="col-lg-3">
								<div class="radio-inline">
									<label class="radio radio-disabled">
									<input type="radior" name="gender_principal" value="1" disabled="" />
									<span></span>Male</label>
									<label class="radio radio-disabled">
									<input type="radio" name="gender_principal" value="2" disabled="" />
									<span></span>Female</label>
								</div>
							</div>
						</div>
					</div>
					<!-- end::dependent additional options 2 -->
					<div class="separator separator-dashed my-10"></div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right pt-0"></label>
						<div class="col-lg-8">
							<h4 class="text-dark font-weight-bold">PhilHealth Data</h4>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right pt-0">Package Type:</label>
						<div class="col-lg-8">
							<div class="radio-inline">
								<label class="radio radio-solid">
								<input type="radio" name="example_2" checked="checked" value="P" />
								<span></span>PCB1</label>
								<label class="radio radio-solid">
								<input type="radio" name="example_2" value="E" />
								<span></span>Expanded PCB</label>
								<label class="radio radio-solid">
								<input type="radio" name="example_2" value="A" />
								<span></span>All Case Rate (ACR)</label>
							</div>
							<span class="form-text text-muted">Please select package type</span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right pt-0"></label>
						<div class="col-lg-8">
							<div class="checkbox-inline">
								<label class="checkbox checkbox-outline checkbox-square">
								<input type="checkbox" value="Y" />
								<span></span>Availment of free initial consultation service</label>
							</div>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right">Enlistment Date:</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" disabled="" />
						</div>
						<label class="col-lg-2 col-form-label text-lg-right">Effectivity Year:</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" disabled="" />
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right">Case Number
                            <i class="la la-question-circle" data-toggle="tooltip"  
                            title="Case No.: Patient Transaction Reference Number for the Whole Patient Record"></i>
                        </label>
						<div class="col-lg-8">
							<input type="text" class="form-control letterspace_2" disabled="" />
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right">Transaction Number
                            <i class="la la-question-circle" data-toggle="tooltip"  
                            title="Trans No.: Enlistment Reference Number"></i>
                        </label>
						<div class="col-lg-8">
							<input type="text" class="form-control letterspace_2" disabled="" />
						</div>
					</div>
					<div class="separator separator-dashed my-10"></div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right pt-0"></label>
						<div class="col-lg-8">
							<h4 class="text-dark font-weight-bold">Patient Consent</h4>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-lg-2 col-form-label text-lg-right pt-0"></label>
						<div class="col-lg-8">
							<div class="checkbox-inline">
								<label class="checkbox checkbox-outline checkbox-square">
								<input type="checkbox" checked="" value="Y" />
								<span></span>With Patient's Consent to share important medical information</label>
							</div>
							<span class="form-text">Important patient information will be made electronically accessible thru connected network medical facilities that shall be used only for medical purposes.</span>
						</div>
					</div>
				</div>
			</div>
		<!--end::Card-->
		</form>
	<!--end::Form-->
</div>
<!--end::Container-->
</div>
<!--end::Entry-->