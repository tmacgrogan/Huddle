package com.example.justin.huddle_a;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class DetailActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.huddle_detail);
        //Replace this garbage later
        Huddle now = TimelineFragment.stuff[TimelineFragment.pos];
        TextView title = (TextView)findViewById(R.id.detail_title); // title
        TextView location = (TextView)findViewById(R.id.detail_location); // duration
        TextView time = (TextView)findViewById(R.id.detail_time);
        TextView description = (TextView)findViewById(R.id.detail_description);
        title.setText(now.title);
        description.setText(now.description);
        location.setText(now.location);
        time.setText(now.time);

    }
}
