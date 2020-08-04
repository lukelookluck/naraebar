from django.shortcuts import render, redirect, get_object_or_404

from django.contrib.auth import get_user_model
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required

from django.contrib.auth.forms import AuthenticationForm
from .forms import CustomUserCreationForm


User = get_user_model()

def signup(request):
    if request.method == 'POST':
        signup_form = CustomUserCreationForm(request.POST)
        if signup_form.is_valid():
            user = signup_form.save()
            auth_login(request, user)
            return redirect('#')

    else:
        form = CustomUserCreationForm()

    context={
        'form': form,
    }

    return render(request, 'accounts/form.html', context)

def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            auth_login(request, form.get_user())
            return redirect('#')
    else:
        form = AuthenticationForm()
    context = {
        'form': form,
    }
    return render(request, 'accounts/form.html', context)

@login_required
def logout(request):
    auth_logout(request)
    return redirect('#')