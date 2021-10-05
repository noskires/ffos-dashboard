<style>
	body{
	font-family: 'Arial', sans-serif;
}

/* CHART DEFAULT STYLES */
.orgchart {
	box-sizing: border-box;
	display: inline-block;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px dashed rgba(0, 0, 0, 0);
	padding: 20px 20px 0 20px;
}

.orgchart .hidden,
.orgchart~.hidden {
	display: none!important;
}

.orgchart.b2t {
	transform: rotate(180deg);
}

.orgchart.l2r {
	position: absolute;
	transform: rotate(-90deg) rotateY(180deg);
	transform-origin: left top;
	text-align: center;
}

.orgchart.r2l {
	position: absolute;
	transform: rotate(90deg);
	transform-origin: left top;
	text-align: center;
}

.orgchart~.mask {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.3);
}

.orgchart~.mask .spinner {
	position: absolute;
	top: calc(50% - 50px);
	left: calc(50% - 50px);
}

.orgchart>.spinner::before,
.orgchart~.mask .spinner::before {
	width: 100px;
	height: 100px;
	border-width: 10px;
	border-radius: 50px;
	border-top-color: rgba(68, 157, 68, 0.8);
	border-bottom-color: rgba(68, 157, 68, 0.8);
	border-left-color: rgba(68, 157, 68, 0.8);
}

.orgchart .nodes {
	display: flex;
	list-style: none;
	padding-left: 0;
	margin: 0;
}

.orgchart .hierarchy {
	width:100%;
	position: relative;
 
}


/* styles of link lines */

.orgchart .hierarchy::before {
	content: "";
	position: absolute;
	top: -11px;
	left: 0;
	width: 100%;
	border-top: 2px solid rgba(217, 83, 79, 0.8);
	box-sizing: border-box;
}

.orgchart .hierarchy:first-child::before,
.orgchart .hierarchy.isSiblingsCollapsed.left-sibs::before {
	left: calc(50% - 1px);
	width: calc(50% + 1px);
}

.orgchart .hierarchy:last-child::before,
.orgchart .hierarchy.isSiblingsCollapsed.right-sibs::before {
	width: calc(50% + 1px);
}

.orgchart .hierarchy:not(.hidden):only-child::before {
	width: 2px;
}

.orgchart>.nodes>.hierarchy::before,
.orgchart .isSiblingsCollapsed:not(.left-sibs):not(.right-sibs)::before,
.orgchart .isSiblingsCollapsed.left-sibs.right-sibs::before,
.orgchart .isSiblingsCollapsed.right-sibs:first-child:before,
.orgchart .isSiblingsCollapsed.left-sibs:last-child:before,
.orgchart .isCollapsedSibling::before,
.orgchart .isCollapsedSibling .hierarchy::before,
.orgchart .isChildrenCollapsed>.node:not(:only-child)::after,
.orgchart .isCollapsedDescendant::before,
.orgchart .isCollapsedDescendant>.node::before,
.orgchart .isCollapsedDescendant>.node::after,
.orgchart .isAncestorsCollapsed:only-child::before,
.orgchart .isAncestorsCollapsed>.node::before {
	content: none;
}


/* excluding leaf node */

.orgchart .node:not(:only-child)::after {
	content: "";
	position: absolute;
	bottom: -11px;
	left: calc(50% - 1px);
	width: 2px;
	height: 9px;
	background-color: rgba(217, 83, 79, 0.8);
}

.orgchart ul li .node.allowedDrop {
	border-color: rgba(68, 157, 68, 0.9);
}

.orgchart ul li .node.currentDropTarget {
	background-color: rgba(68, 157, 68, 0.9);
}

.orgchart ul li .node.selected {
	background-color: rgba(238, 217, 54, 0.5);
}

.orgchart ul li .node:hover {
	/* background-color: rgba(238, 217, 54, 0.5); */
}


/* excluding root node */

.orgchart>ul>li>ul li>.node::before {
	content: "";
	position: absolute;
	top: -11px;
	left: calc(50% - 1px);
	width: 2px;
	height: 9px;
	background-color: rgba(217, 83, 79, 0.8);
}

.orgchart>ul>li>ul li.isSiblingsCollapsed>.node::before {
	top: -13px;
	height: 11px;
}


/* node styling */

.orgchart .node {
	box-sizing: border-box;
	display: inline-block;
	position: relative;
	margin: 0 0 20px 0;
	padding: 3px;
	border: 2px dashed transparent;
	text-align: center;
}

.orgchart.l2r .node,
.orgchart.r2l .node {
	width: 50px;
	height: 140px;
}

.orgchart .node:hover {
	/* FAV: background-color: rgba(238, 217, 54, 0.5); */
	transition: .5s;
	cursor: default;
	z-index: 20;
}

.orgchart .node.focused {
	/* background-color: rgba(238, 217, 54, 0.5); */
}

.orgchart .ghost-node {
	position: fixed;
	left: -10000px;
	top: -10000px;
}

.orgchart .ghost-node rect {
	fill: #ffffff;
	stroke: #bf0000;
}

.orgchart .node.allowedDrop {
	border-color: rgba(68, 157, 68, 0.9);
}

.orgchart .node>.spinner {
	position: absolute;
	top: calc(50% - 1rem);
	left: calc(50% - 1rem);
}

.orgchart .node>.spinner::before {
	width: 2rem;
	height: 2rem;
	border-width: 0.2rem;
	border-radius: 1rem;
	border-top-color: rgba(68, 157, 68, 0.8);
	border-bottom-color: rgba(68, 157, 68, 0.8);
	border-left-color: rgba(68, 157, 68, 0.8);
}

.orgchart .node .title {
	box-sizing: border-box;
	padding: 6px 8px;
	width: 200px;
	text-align: center;
	font-size: 0.775rem;
	font-weight: bold;
	height: 24px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	background-color: #d9121b;
	color: #fff;
	border-radius: 4px 4px 0 0;
}

.orgchart.b2t .node .title {
	transform: rotate(-180deg);
	transform-origin: center bottom;
}

.orgchart.l2r .node .title {
	transform: rotate(-90deg) translate(-45px, -45px) rotateY(180deg);
	transform-origin: bottom center;
}

.orgchart.r2l .node .title {
	transform: rotate(-90deg) translate(-45px, -45px);
	transform-origin: bottom center;
}

.orgchart .node .title .symbol {
	float: left;
	margin-top: 12px;
	margin-left: 2px;
}

.orgchart .node .title .symbol::before {
	background-color: #fff;
	border-color: rgba(217, 83, 79, 0.8);
}

.orgchart .node .title .symbol::after {
	background-color: #fff;
}

.orgchart .node .content {
	box-sizing: border-box;
	padding: 4px;
	height: 24px;
	max-width: 200px;
	font-size: 0.7rem;
	border: 1px solid #d9121b;
	border-radius: 0 0 4px 4px;
	text-align: center;
	background-color: #fff;
	color: #333;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.orgchart.b2t .node .content {
	transform: rotate(180deg);
	transform-origin: center top;
}

.orgchart.l2r .node .content {
	transform: rotate(-90deg) translate(-45px, -45px) rotateY(180deg);
	transform-origin: top center;
	width: 130px;
}

.orgchart.r2l .node .content {
	transform: rotate(-90deg) translate(-45px, -45px);
	transform-origin: top center;
	width: 130px;
}

.orgchart .node .edge {
	position: absolute;
	cursor: default;
	transition: .2s;
}

.orgchart .node .edge::before {
	border-color: rgba(68, 157, 68, 0.5);
}

.orgchart.noncollapsable .node .edge {
	display: none;
}

.orgchart .node .edge:hover {
	cursor: pointer;
}

.orgchart .edge:hover::before {
	border-color: #449d44;
}

.orgchart .node .verticalEdge {
	width: calc(100% - 6px);
	width: -webkit-calc(100% - 6px);
	width: -moz-calc(100% - 6px);
	height: 10px;
	left: 3px;
}

.orgchart .node .verticalEdge::before {
	position: absolute;
	left: calc(50% - 0.3125rem);
}

.orgchart .node .topEdge {
	top: -7px;
}

.orgchart .node .topEdge.oci-chevron-up::before {
	top: 2px;
}

.orgchart .node .topEdge.oci-chevron-down::before {
	bottom: 3px;
}

.orgchart .node .bottomEdge {
	bottom: -7px;
}

.orgchart .node .bottomEdge.oci-chevron-up::before {
	bottom: -3px;
}

.orgchart .node .bottomEdge.oci-chevron-down::before {
	bottom: 1px;
}

.orgchart .node .horizontalEdge {
	width: 10px;
	height: calc(100% - 6px);
	height: -webkit-calc(100% - 6px);
	height: -moz-calc(100% - 6px);
	top: 3px;
}

.orgchart .node .rightEdge {
	right: -2px;
}

.orgchart .node .leftEdge {
	left: -2px;
}

.orgchart .node .horizontalEdge::before {
	position: absolute;
	top: calc(50% - 0.3125rem);
}

.orgchart .node .rightEdge.oci-chevron-left::before {
	right: -3px;
}

.orgchart .node .rightEdge.oci-chevron-right::before {
	right: 1px;
}

.orgchart .node .leftEdge.oci-chevron-right::before {
	left: -3px;
}

.orgchart .node .leftEdge.oci-chevron-left::before {
	left: 1px;
}

.orgchart .node .toggleBtn {
	position: absolute;
	left: 5px;
	bottom: -2px;
}

.orgchart .node .toggleBtn::before {
	background-color: rgba(68, 157, 68, 0.6);
}

.orgchart .node .toggleBtn:hover::before {
	background-color: #449d44;
}

.oc-export-btn {
	margin-left: 0.5rem;
	padding: 0.5rem 1rem;
}

.orgchart .node {
	transition: transform 0.3s, opacity 0.3s;
}

.orgchart .slide-down {
	opacity: 0;
	transform: translateY(40px);
}

.orgchart.l2r .node.slide-down,
.orgchart.r2l .node.slide-down {
	transform: translateY(130px);
}

.orgchart .slide-up {
	opacity: 0;
	transform: translateY(-40px);
}

.orgchart.l2r .node.slide-up,
.orgchart.r2l .node.slide-up {
	transform: translateY(-130px);
}

.orgchart .slide-right {
	opacity: 0;
	transform: translateX(130px);
}

.orgchart.l2r .node.slide-right,
.orgchart.r2l .node.slide-right {
	transform: translateX(40px);
}

.orgchart .slide-left {
	opacity: 0;
	transform: translateX(-130px);
}

.orgchart.l2r .node.slide-left,
.orgchart.r2l .node.slide-left {
	transform: translateX(-40px);
}


/* styles for vertical nodes */

.orgchart .hierarchy.hybrid>.node {
	margin-bottom: 0;
}

.orgchart .hierarchy.hybrid>.node::after {
	content: none;
}

.orgchart .nodes.vertical {
	display: block;
	margin: 0;
	padding-left: 18px;
}

.orgchart .nodes.vertical .nodes {
	list-style: none;
	display: block;
	margin: 0;
	padding-left: 18px;
	text-align: left;
}

.orgchart .nodes.vertical .node {
	margin-bottom: 0;
}

.orgchart .nodes.vertical .node::before,
.orgchart .nodes.vertical .node::after {
	content: none;
}

.orgchart .nodes.vertical::before {
	content: '';
	display: inline-block;
	position: relative;
	height: 14px;
	width: 2px;
	left: -9px;
	background-color: rgba(217, 83, 79, 0.8);
}

.orgchart .nodes.vertical>.hierarchy:first-child::before {
	box-sizing: border-box;
	top: -4px;
	height: 30px;
	width: calc(50% - 2px);
	border-width: 2px 0 0 2px;
}

.orgchart .nodes.vertical .hierarchy {
	position: relative;
	text-align: left;
}

.orgchart .nodes.vertical .hierarchy::before,
.orgchart .nodes.vertical .hierarchy::after {
	box-sizing: border-box;
	content: '';
	position: absolute;
	left: -6px;
	border-color: rgba(217, 83, 79, 0.8);
	border-style: solid;
	border-width: 0 0 2px 2px;
}

.orgchart .nodes.vertical .hierarchy::before {
	top: -4px;
	height: 30px;
	width: 11px;
}

.orgchart .nodes.vertical .hierarchy::after {
	top: 1px;
	height: 100%;
}

.orgchart .nodes.vertical .hierarchy:first-child::after {
	box-sizing: border-box;
	top: 24px;
	width: 11px;
	border-width: 2px 0 0 2px;
}

.orgchart .nodes.vertical .hierarchy:last-child::after {
	box-sizing: border-box;
	border-width: 2px 0 0;
}


/* custom icons for orgchart */

.oci {
	display: inline-block;
	position: relative;
	font-style: normal;
	font-family: Arial;
}

.oci-chevron-up::before {
	content: "";
	display: inline-block;
	box-sizing: border-box;
	vertical-align: text-bottom;
	width: 0.625rem;
	height: 0.625rem;
	border-width: 0 0.2rem 0.2rem 0;
	border-style: solid;
	border-color: #000;
	background: transparent;
	transform: rotate(-135deg);
}

.oci-chevron-right::before {
	content: "";
	display: inline-block;
	box-sizing: border-box;
	width: 0.625rem;
	height: 0.625rem;
	border-width: 0 0.2rem 0.2rem 0;
	border-style: solid;
	border-color: #000;
	background: transparent;
	transform: rotate(-45deg);
}

.oci-chevron-down::before {
	content: "";
	display: inline-block;
	box-sizing: border-box;
	width: 0.625rem;
	height: 0.625rem;
	border-width: 0 0.2rem 0.2rem 0;
	border-style: solid;
	border-color: #000;
	background: transparent;
	transform: rotate(45deg);
}

.oci-chevron-left::before {
	content: "";
	display: inline-block;
	box-sizing: border-box;
	width: 0.625rem;
	height: 0.625rem;
	border-width: 0 0.2rem 0.2rem 0;
	border-style: solid;
	border-color: #000;
	background: transparent;
	transform: rotate(135deg);
}

.oci-leader::before {
	position: absolute;
	content: "";
	display: inline-block;
	width: 0.4rem;
	height: 0.4rem;
	border-radius: 0.2rem;
	background: #000;
	top: -0.75rem;
	left: 0.1rem;
}

.oci-leader::after {
	position: absolute;
	content: "";
	display: inline-block;
	width: 0.875rem;
	height: 0.375rem;
	border-radius: 0.25rem 0.25rem 0 0;
	background: #000;
	top: -0.3rem;
	left: -0.125rem;
}

.oci-plus-square::before {
	content: "+";
	display: inline-block;
	vertical-align: text-bottom;
	text-align: center;
	width: 1rem;
	height: 1rem;
	background-color: #000;
	color: #fff;
}

.oci-plus-circle::before {
	content: "+";
	display: inline-block;
	vertical-align: text-bottom;
	text-align: center;
	width: 1rem;
	height: 1rem;
	border-radius: 0.5rem;
	background-color: #000;
	color: #fff;
}

.oci-minus-square::before {
	content: "−";
	display: inline-block;
	vertical-align: text-bottom;
	text-align: center;
	width: 1rem;
	height: 1rem;
	background-color: #000;
	color: #fff;
}

.oci-minus-circle::before {
	content: "−";
	display: inline-block;
	vertical-align: text-bottom;
	text-align: center;
	width: 1rem;
	height: 1rem;
	border-radius: 0.5rem;
	background-color: #000;
	color: #fff;
}

.oci-arrow-circle-up::before {
	content: "▲";
	display: inline-block;
	text-align: center;
	vertical-align: text-bottom;
	width: 1rem;
	height: 1rem;
	border-radius: 0.5rem;
	background-color: #000;
	color: #fff;
	font-size: 0.875rem;
}

.oci-arrow-circle-down::before {
	content: "▼";
	text-align: center;
	display: inline-block;
	vertical-align: text-bottom;
	width: 1rem;
	height: 1rem;
	border-radius: 0.5rem;
	background-color: #000;
	color: #fff;
	font-size: 0.875rem;
}

.oci-info-circle::before {
	content: "i";
	display: inline-block;
	vertical-align: text-bottom;
	width: 1rem;
	height: 1rem;
	border-radius: 0.5rem;
	background-color: #000;
	color: #fff;
	text-align: center;
	font-weight: bold;
}

.oci-spinner::before {
	content: "";
	vertical-align: text-bottom;
	display: inline-block;
	box-sizing: border-box;
	width: 1rem;
	height: 1rem;
	border: 0.1rem solid #000;
	border-right-color: transparent;
	border-radius: 0.625rem;
	animation: oci-infinite-spinning .75s linear infinite;
}

@keyframes oci-infinite-spinning {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}


/*
** CUSTOMIZE CHART
**/

#organization-scheme-container {
	position: relative;
    
	overflow: auto;
	text-align: center;
}

#organization-scheme-container .edge{
	display: none;
}

#organization-scheme-container .title {
	position: relative;
	cursor: pointer;
	z-index: 3;
}

#organization-scheme-container .content {
	position: relative;
	cursor: pointer;
	z-index: 2;
}

#organization-scheme-container .avatar {
	position: relative;
	z-index: 1;
	border-radius: 50%;
	margin-bottom: -20px;
	height: 84px;
	width: 84px;
	object-fit: cover;
	-webkit-user-select: none;
	user-select: none;
}

@media screen and (max-width: 576px){
	#organization-scheme-container .avatar {
		margin-bottom: -15px;
		height: 64px;
		width: 64px;
	}
}

.node .title {
	background:blue;
}

.orgchart .node .title { background-color: #009933;  }
.orgchart .node .content { border-color: #009933 }
  </style>
  
  <style type="text/css">
    .orgchart { background: none; }
    .orgchart td.left, .orgchart td.right, .orgchart td.top { border-color: #aaa; }
    .orgchart td>.down { background-color: #aaa; }
    .orgchart .middle-level .title { background-color: #006699; }
    .orgchart .middle-level .content { border-color: #006699; }
    .orgchart .product-dept .title { background-color: #009933; }
    .product-dept .title { background-color: #009933; }
    .orgchart .product-dept .content { border-color: #009933; }
    .product-dept .content { border-color: #009933; }
    .orgchart .rd-dept .title { background-color: #993366; }
    .orgchart .rd-dept .content { border-color: #993366; }
    .orgchart .pipeline1 .title { background-color: #DA0037; }
    .orgchart .pipeline1 .content { border-color: #DA0037; }
    .orgchart .frontend1 .title { background-color: #cc0066; }
    .orgchart .frontend1 .content { border-color: #cc0066; }
	 
  </style>

<!-- begin::Entry -->
<div class="d-flex flex-column-fluid">
<!--begin::Container-->
<div class="container">

  
  
  
  <div id="organization-scheme-container"></div>
</div>
<!--end::Container-->
</div>
<!--end::Entry-->

<script>
	$(function(){
    var ds = {
        name: "Ilano, Alvin S.",
        avatar: "public/assets/img/ASI.png",
        title: 'Department Head/VP',
		className: 'product-dept',
        children: [
            { 
				name: "Miranda, Ronald S. ", 
                avatar: "public/assets/img/RSM.png",
				title: 'Center Head/AVP',
				className: 'middle-level',
				'children': [
					{'name':'Mercado Jr., Carlos G. ', 'title': 'Division Head', 'className': 'rd-dept', avatar: "public/assets/img/CGM.png",
						'children': [
							{'name':'Garvez, Anjela P.', 'title': 'Executive Secretary', 'className': 'frontend1', avatar: "public/assets/img/APG.jpg",},
							{'name':'Agustin, Rajesh Khan D.', 'title': 'Section Head', 'className': 'frontend1', avatar: "public/assets/img/RDA.png",
								'children': [
									{'name':'Angeles, Janver D.', 'title': 'Telecom Engineer', 'className': 'pipeline1', avatar: "public/assets/img/JDA.png"},
									{'name':'Concepcion, Ryan Leandro N.', 'title': 'Telecom Engineer', 'className': 'pipeline1', avatar: "public/assets/img/RNC.png"},
									{'name':'Dela Resma, Gian Carlo V.', 'title': 'Jr Telecom Engineer', 'className': 'pipeline1', avatar: "public/assets/img/GVD.jpg"},
									{'name':'Supnet, Erikson B.', 'title': 'Telecom Engineer', 'className': 'pipeline1', avatar:'public/assets/img/EBS.png'},
									{'name':'Urbano, Cleto B.', 'title': 'Telecom Engineer', 'className': 'pipeline1', avatar: "public/assets/img/CBU.png"},
								]
							},
							{'name':'Simon, Maria Gretchen A.', 'title': 'Section Head', 'className': 'frontend1', avatar: "public/assets/img/MAS.png",
								'children': [
									{'name':'Esguerra, Ryan Christian V.', 'title': 'Jr Telecom Engineer', 'className': 'pipeline1', avatar: "public/assets/img/RVE.png"},
									{'name':'Manalo, Carlito D.', 'title': 'Telecom Associate', 'className': 'pipeline1', avatar: "public/assets/img/CDM.png"},
									{'name':'Matias, John Austin S.', 'title': 'Jr Telecom Engineer', 'className': 'pipeline1', avatar: "public/assets/img/JSM.png"},
									{'name':'Ramones, Aljhun C.', 'title': 'Jr Telecom Engineer', 'className': 'pipeline1', avatar: "public/assets/img/ACR.jpeg"}
								]
							}
						]
					},
					
				]
			}
          
        ],
    };
	
    var elContainer = $("#organization-scheme-container");

    if(ds && elContainer.length){
        var oc = elContainer.orgchart({
            data: ds,
            nodeContent: "title",
            pan: false,
            zoom: false,
			zoominLimit: 2,
			zoomoutLimit: 0.5,
            parentNodeSymbol: null,
            toggleSiblingsResp: false,
			verticalLevel: 5,
			visibleLevel: 5,
            createNode: function(node, data) {
                if(data.avatar){
                    var elAvatar = $(`<img class="avatar" src="${data.avatar}"/>`);
                    node.prepend(elAvatar);
                }
                
                /* onClick */
                // node.on('click', function(){
                //     alert('MODAL');
                // })
            }
        });
        
        var ocResponsiveCalc = function () {
            var width = $(window).width();
            if (width > 576) {
                oc.init({ verticalLevel: undefined });
            } else {
                oc.init({ verticalLevel: 2 });
            }
        }
        
        $(window).resize(ocResponsiveCalc);
        ocResponsiveCalc();
    }
});
  </script>