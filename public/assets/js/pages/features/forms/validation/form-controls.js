// Class definition
var KTFormControls = function () {

	var _initDemo2 = function () {

    const submitButton = document.getElementById('submit_member_registration');

		FormValidation.formValidation(
			document.getElementById('kt_member_registration_form'),
			{
				fields: {

					pin1: {
						validators: {
							notEmpty: {
								message: 'PhilHealth Identfication Number is required'
							},
							stringLength: {
								min:12,
								max:12,
								message: 'PIN consists of 12 numbers'
							}
						}
					},

					lname: {
						validators: {
							notEmpty: {
								message: 'Last name is required'
							}
						}
					},

					fname: {
						validators: {
							notEmpty: {
								message: 'First name is required'
							}
						}
					},

					mname: {
						validators: {
							notEmpty: {
								message: 'Middle name is required'
							}
						}
					},

					birthdate: {
						validators: {
							notEmpty: {
								message: 'Date of birth is required'
							},
							stringLength: {
								min:8,
								max:8,
								message: 'The value is not a valid date of birth'
							}
						}
					},

					civil_status: {
						validators: {
							notEmpty: {
								message: 'Civil status is required'
							}
						}
					},

					number: {
						validators: {
							notEmpty: {
								message: 'Cellphone number is required'
							},
							stringLength: {
								min:11,
								max:11,
								message: 'The value is not a valid cellphone number'
							}
						}
					},					

					email: {
						validators: {
							notEmpty: {
								message: 'Email is required'
							},
							emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					},

					province: {
						validators: {
							notEmpty: {
								message: 'Province is required'
							}
						}
					},

					municipality: {
						validators: {
							notEmpty: {
								message: 'Municipality is required'
							}
						}
					},

					barangay: {
						validators: {
							notEmpty: {
								message: 'Barangay is required'
							}
						}
					},

					pin2: {
						validators: {
							notEmpty: {
								message: 'PhilHealth Identfication Number is required'
							},
							stringLength: {
								min:12,
								max:12,
								message: 'PIN consists of 12 numbers'
							}
						}
					}
				},

				plugins: {
					//Indicate the events which the validation will be executed when these events are triggered
					trigger: new FormValidation.plugins.Trigger({
						event: {
	                        pin1: 'blur',
	                        pin2: 'blur',
	                        birthdate: 'blur',
	                        number: 'blur',
	                        province: 'blur',
	                        municipality: 'blur',
	                        barangay: 'blur',
	                    },
					}),
					excluded: new FormValidation.plugins.Excluded(),
					// Validate fields when clicking the Submit button
					submitButton: new FormValidation.plugins.SubmitButton(),
            		// Submit the form when all fields are valid
            		defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
					// Bootstrap Framework Integration
					bootstrap: new FormValidation.plugins.Bootstrap({
						eleInvalidClass: '',
						eleValidClass: '',
					}),		
				},
			}
		);
	}

	return {
		// public functions
		init: function() {
			_initDemo2();
		}
	};
}();

jQuery(document).ready(function() {
	KTFormControls.init();
});
