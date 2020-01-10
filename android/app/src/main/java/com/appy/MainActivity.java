package com.appy;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private EditText username;
    private EditText password;
    private Button login;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        username = findViewById(R.id.username);
        password = findViewById(R.id.password);
        login = findViewById(R.id.login_button);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String username_str = username.getText().toString();
                if(username_str.length() == 0) {
                    Toast.makeText(MainActivity.this, "Enter a username", Toast.LENGTH_SHORT).show();
                    return;
                }

                String password_str = password.getText().toString();
                if(password_str.length() == 0) {
                    Toast.makeText(MainActivity.this, "Enter a password", Toast.LENGTH_SHORT).show();
                    return;
                }

                startActivity(new Intent(MainActivity.this, ReactActivity.class));
            }
        });
    }
}
