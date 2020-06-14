<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--===============================================================================================-->
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/bootstrap/css/bootstrap.min.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('fonts/font-awesome-4.7.0/css/font-awesome.min.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('fonts/themify/themify-icons.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('fonts/Linearicons-Free-v1.0.0/icon-font.min.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('fonts/elegant-font/html-css/style.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/animate/animate.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/css-hamburgers/hamburgers.min.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('public/vendor/animsition/css/animsition.min.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/select2/select2.min.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/slick/slick.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('css/util.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/main.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/overwrite.css')}}">
    <!--===============================================================================================-->
</head>

<body class="animsition">
    <header class="header1">
        <div class="container-menu-header">

            <div class="wrap_header"> <a href="index.html" class="logo"> <img src="images/logo2.png" alt="IMG-LOGO">
                </a>
                <div class="wrap_menu">
                    <nav class="menu">
                        <ul class="main_menu">
                            <li class="sale-noti"> <a href="index.html">Home</a></li>
                            <li> <a href="product1.html" data-toggle="modal" data-target=".bd-product-modal">products</a>

                            </li>
                            <li> <a href="design1.html" data-toggle="modal" data-target=".bd-Designs-modal">Designs</a>

                            </li>
                            <li> <a href="my-ideas.html">MY Ideas</a></li>
                            <li> <a href="about.html">About</a></li>
                            <li> <a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="header-icons">

                    <div class="header-wrapicon2">

                        <a class="header-icon1 js-show-header-dropdown sign-in" href="{{action('ProductController@index')}}"><i class="fa fa-user" aria-hidden="true"></i> Sign In </a>
       <!--
                        <div class="header-cart header-dropdown header-cart-login">
                            <ul class="header-cart-wrapitem login">


                                <li class="header-cart-item">
                                    <a href="Order.html"> My orders </a>
                                </li>
                                <li class="header-cart-item">
                                    <a href="account-settings.html"> Account Settings </a>
                                </li>
                                <li class="header-cart-item">
                                    <a href="#">sign out </a>
                                </li>
                            </ul>


                        </div>
-->
                    </div>

                    <span class="linedivide1"></span>
                    <div class="header-wrapicon2">

                        <a class="header-icon1 js-show-header-dropdown" href="cart.html"><i class="fa fa-shopping-cart" aria-hidden="true"></i> </a>

                        <span class="header-icons-noti">0</span>

                    </div>

                </div>
            </div>
        </div>
        <div class="wrap_header_mobile">
            <a href="index.html" class="logo-mobile"> <img src="images/logo2.png" alt="IMG-LOGO"> </a>
            <div class="btn-show-menu">
                <div class="header-icons-mobile">
                    <a href="login.html" class="header-wrapicon1 dis-block">
                        <img src="images/icons/icon-header-01.png" class="header-icon1" alt="ICON">
                    </a>
                    <span class="linedivide2"></span>
                    <div class="header-wrapicon2">

                        <a class="header-icon1 js-show-header-dropdown" href="cart.html"><i class="fa fa-shopping-cart" aria-hidden="true"></i> </a>

                        <span class="header-icons-noti">0</span>

                    </div>
                </div>
                <div class="btn-show-menu-mobile hamburger hamburger--squeeze"> <span class="hamburger-box"> <span class="hamburger-inner"></span> </span></div>
            </div>
        </div>
        <div class="wrap-side-menu">
            <nav class="side-menu">
                <ul class="main-menu">
                    <li class="item-menu-mobile"> <a href="index.html">Home</a></li>


                    <li class="item-menu-mobile"> <a href="product.html">products</a>

                    </li>
                    <li class="item-menu-mobile"><a href="design.html">Designs</a>
                    </li>
                    <li class="item-menu-mobile"> <a href="my-ideas.html">MY Ideas</a></li>
                    <li class="item-menu-mobile"> <a href="about.html">About</a></li>
                    <li class="item-menu-mobile"> <a href="contact.html">Contact</a></li>

                </ul>
            </nav>
        </div>
    </header>


    @yield('content')


<footer class="bg6 p-t-35 p-b-35 p-l-45 p-r-45">
        <div class="container">
            <div class="row p-b-90">
                <div class="col-md-12 text-center">

                </div>
                <div class="col-md-3  col-sm-6 p-t-20 p-l-15 p-r-15 respon3">
                    <h4 class="s-text12 p-b-30"> CONNECT WITH US</h4>
                    <div>
                        <ul class="social-icons top-i icon-circle icon-rotate list-unstyled list-inline">

                            <li> <a href="" target="_blank"> <i class="fa fa-phone" aria-hidden="true"></i>
                                    <span class="footer-icon"> 1-800-934-1571 </span>
                                </a>
                            </li>
                            <li> <a href="" target="_blank"><i class="fa fa-facebook fa-top"></i>
                                    <span class="footer-icon">facebook </span>
                                </a>
                            </li>
                            <li> <a href="#">
                                    <i class="fa fa-twitter fa-top" target="_blank"></i>
                                    <span class="footer-icon">twitter </span>
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>
                <div class="col-md-3  col-sm-6 p-t-20 p-l-15 p-r-15 respon4">
                    <h4 class="s-text12 p-b-30"> COMPANY</h4>
                    <ul>
                        <li class="p-b-9"> <a href="hwo-to-buy.html" class="s-text7">about us</a></li>
                    </ul>
                </div>

                <div class="col-md-3 col-sm-6 p-t-20 p-l-15 p-r-15 respon4">
                    <h4 class="s-text12 p-b-30"> GET HELP</h4>
                    <ul>
                        <li class="p-b-9"> <a href="Order.html" class="s-text7"> Your Orders </a></li>
                        <li class="p-b-9"> <a href="contact.html" class="s-text7"> Contact Us </a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6 p-t-20 p-l-15 p-r-15 respon4">
                    <h4 class="s-text12 p-b-30"> SHARE YOUR IDEAS</h4>
                    <p class="s-text7"> We love hearing from you. Send ideas and comments to </p>
                    <a href="#" class=" s-text7 get-contact">Click here.</a>
                </div>

            </div>
        </div>
    </footer>


    <!-- Back to top -->
    <div class="btn-back-to-top bg0-hov" id="myBtn">
        <span class="symbol-btn-back-to-top">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
    </div>


    <!--===============================================================================================-->
    <script type="text/javascript" src="{{asset('vendor/jquery/jquery-3.2.1.min.js')}}"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="{{asset('vendor/animsition/js/animsition.min.js')}}"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="{{asset('vendor/bootstrap/js/popper.js')}}"></script>
    <script type="text/javascript" src="{{asset('endor/bootstrap/js/bootstrap.min.js')}}"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="{{asset('vendor/select2/select2.min.js')}}"></script>
    <script type="text/javascript">
        $(".selection-1").select2({
            minimumResultsForSearch: 20,
            dropdownParent: $('#dropDownSelect1')
        });

        $(".selection-2").select2({
            minimumResultsForSearch: 20,
            dropdownParent: $('#dropDownSelect2')
        });
    </script>
    <!--===============================================================================================-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKFWBqlKAGCeS1rMVoaNlwyayu0e0YRes"></script>
    <script src="{{asset('js/map-custom.js')}}"></script>
    <!--===============================================================================================-->
    <script src="{{asset('js/main.js')}}"></script>
    <script>
        $('.select2').select2()
            .on("select2:open", function() {
                $('.select2-results__options').niceScroll({
                    cursorcolor: "#5fdfe8",
                    cursorwidth: "8px",
                    autohidemode: false,
                    cursorborder: "1px solid #5fdfe8",
                    horizrailenabled: false,
                });
            });
    </script>
    <script>
        $(document).ready(function() {
            function alignModal() {
                var modalDialog = $(this).find(".modal-dialog");

                // Applying the top margin on modal dialog to align it vertically center
                modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
            }
            // Align modal when it is displayed
            $(".modal").on("shown.bs.modal", alignModal);


        });
    </script>
    <script>
        //Call Us
        $(document).ready(function() {
            setTimeout(function() {
                $('#callModal').modal('show');
                $('body').css('padding-right', '0px');
            }, 100000);
        });
    </script>
</body>

</html>