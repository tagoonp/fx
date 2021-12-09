var auth = {
    login(){
        $check = 0;
        $('.form-control').removeClass('is-invalid')
        if($('#exampleInputEmail1').val() == ''){
            $('#exampleInputEmail1').addClass('is-invalid')
            $check++;
        }

        if($('#exampleInputPassword1').val() == ''){
            $('#exampleInputPassword1').addClass('is-invalid')
            $check++;
        }

        if($check != 0){ return ;}
    },
    register(){
        $check = 0;
        $('.form-control').removeClass('is-invalid')
        if($('#inputfirstname4').val() == ''){
            $('#inputfirstname4').addClass('is-invalid')
            $check++;
        }

        if($('#inputlastname4').val() == ''){
            $('#inputlastname4').addClass('is-invalid')
            $check++;
        }

        if($('#exampleInputPassword2').val() == ''){
            $('#exampleInputPassword2').addClass('is-invalid')
            $check++;
        }

        if($('#exampleInputEmail1').val() == ''){
            $('#exampleInputEmail1').addClass('is-invalid')
            $check++;
        }

        if($('#exampleInputPassword1').val() == ''){
            $('#exampleInputPassword1').addClass('is-invalid')
            $check++;
        }

        if($('#exampleInputPassword1').val() != $('#exampleInputPassword2').val()){
            $('#exampleInputPassword2').addClass('is-invalid')
            $check++;
        }

        if($check != 0){ return ;}
    }
}

$(function(){
    $('#register_form').submit(function(){ auth.register() })
    $('#login_form').submit(function(){ auth.login() })
})