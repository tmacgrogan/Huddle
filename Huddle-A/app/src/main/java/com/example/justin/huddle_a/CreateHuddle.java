package com.example.justin.huddle_a;

import android.animation.TimeAnimator;
import android.graphics.Color;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.util.ArrayList;

public class CreateHuddle extends AppCompatActivity {
    Button ibutton, gbutton,sbutton, abutton, submit;
    Huddle toAdd;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_huddle);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        toolbar.setTitle("Create Huddle");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        ibutton = (Button)findViewById(R.id.ibutton);
        gbutton = (Button)findViewById(R.id.gbutton);
        sbutton = (Button)findViewById(R.id.sbutton);
        abutton = (Button)findViewById(R.id.abutton);
        submit = (Button)findViewById(R.id.submit_button);
        submit.setBackgroundColor(Color.parseColor("#3F51B5"));
        ibutton.setOnClickListener(myhandler1);
        gbutton.setOnClickListener(myhandler2);
        sbutton.setOnClickListener(myhandler3);
        abutton.setOnClickListener(myhandler4);
        submit.setOnClickListener(submitList);



    }
    //this is awful and just for show
    View.OnClickListener myhandler1 = new View.OnClickListener() {
        public void onClick(View v) {
            System.out.println("fuck");
            ibutton.setSelected(true);
            gbutton.setSelected(false);
            gbutton.setBackgroundColor(Color.parseColor("#FFFFFF"));
            ibutton.setBackgroundColor(Color.parseColor("#3F51B5"));
        }
    };
    View.OnClickListener myhandler2 = new View.OnClickListener() {
        public void onClick(View v) {
            ibutton.setSelected(false);
            gbutton.setSelected(true);
            ibutton.setBackgroundColor(Color.parseColor("#FFFFFF"));
            gbutton.setBackgroundColor(Color.parseColor("#3F51B5"));

        }
    };
    View.OnClickListener myhandler3 = new View.OnClickListener() {
        public void onClick(View v) {
            sbutton.setSelected(true);
            abutton.setSelected(false);
            abutton.setBackgroundColor(Color.parseColor("#FFFFFF"));
            sbutton.setBackgroundColor(Color.parseColor("#3F51B5"));
        }
    };
    View.OnClickListener myhandler4 = new View.OnClickListener() {
        public void onClick(View v) {
            sbutton.setSelected(false);
            abutton.setSelected(true);
            sbutton.setBackgroundColor(Color.parseColor("#FFFFFF"));
            abutton.setBackgroundColor(Color.parseColor("#3F51B5"));

        }
    };
    View.OnClickListener submitList = new View.OnClickListener() {
        public void onClick(View v) {
            EditText title = (EditText)findViewById(R.id.editText);
            EditText description = (EditText)findViewById(R.id.editText2);
            EditText location = (EditText)findViewById(R.id.locbutton);

            //Add new huddle to ArrayAdapter
            toAdd = new Huddle(R.drawable.pig4, title.getText().toString(), location.getText().toString(), description.getText().toString(), "Today", "TF" );
            TimelineFragment.Adapter.addItem(toAdd);
            //Close the activity
            finish();

        }
    };
}
