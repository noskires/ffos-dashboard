"use strict";
var KTDatatablesBasicScrollable = function() {

    var initTable2 = function() {
        var table = $('#kt_datatable2');

        // begin second table
        table.DataTable({
            scrollY: '50vh',
            scrollX: true,
            scrollCollapse: true,
            columnDefs: [{
                    targets: 8,
                    title: '',
                    orderable: false,
                    render: function(data, type, full, meta) {
						return '\
	                        <div class="dropdown dropdown-inline">\
	                            <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
	                                <span class="svg-icon svg-icon-md">\
	                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                            <rect x="0" y="0" width="24" height="24"/>\
	                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
	                                        </g>\
	                                    </svg>\
	                                </span>\
	                            </a>\
	                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
	                                <ul class="navi flex-column navi-hover py-2">\
	                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
	                                        Choose an action:\
	                                    </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="far fa-edit"></i></span>\
                                                <span class="navi-text">Edit</span>\
                                            </a>\
                                        </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="fa fa-heartbeat"></i></span>\
	                                            <span class="navi-text">Profiling</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="fa fa-stethoscope"></i></span>\
	                                            <span class="navi-text">Consultation</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="fas fa-hand-holding-medical"></i></span>\
	                                            <span class="navi-text">Medication</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="fas fa-times text-danger"></i></span>\
	                                            <span class="navi-text text-danger">Delete</span>\
	                                        </a>\
	                                    </li>\
	                                </ul>\
	                            </div>\
	                        </div>\
	                    ';
                    },
                },
                {
                    targets: 6,
					width: '75px',
                    render: function(data, type, full, meta) {
                        var status = {
                            1: {
                                'title': 'Assigned',
                                'class': 'label-light-primary'
                            },
                            2: {
                                'title': 'Not Yet Assigned',
                                'class': ' label-dark-secondary'
                            },
                        };
                        if (typeof status[data] === 'undefined') {
                            return data;
                        }
                        return '<span class="label ' + status[data].class + ' label-inline label-bold">' + status[data].title + '</span>';
                    },
                },
                {
                    targets: 7,
					width: '75px',
                    render: function(data, type, full, meta) {
                        var status = {
                            1: {
                                'title': 'Member',
                                'state': 'primary'
                            },
                            2: {
                                'title': 'Dependent',
                                'state': 'info'
                            },
                            3: {
                                'title': 'Non-Member',
                                'state': 'warning'
                            },
                        };
                        if (typeof status[data] === 'undefined') {
                            return data;
                        }
                        return '<span class="label label-' + status[data].state + ' label-dot mr-2"></span>' +
                            '<span class="font-weight-bold text-' + status[data].state + '">' + status[data].title + '</span>';
                    },
                },
            ],
        });

        $('#kt_datepicker').datepicker({
            format: 'yyyy/mm/dd',
            orientation: "bottom left",
            todayHighlight: true,
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>',
            },
        });

    };

    return {

        //main function to initiate the module
        init: function() {
            initTable2();
        },

    };

}();

jQuery(document).ready(function() {
    KTDatatablesBasicScrollable.init();
});
