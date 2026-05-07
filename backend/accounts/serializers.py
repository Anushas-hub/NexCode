from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        try:
            user = User.objects.get(username=username, email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid credentials")

        user = authenticate(username=username, password=password)

        if not user:
            raise serializers.ValidationError("Invalid credentials")

        data['user'] = user
        return data