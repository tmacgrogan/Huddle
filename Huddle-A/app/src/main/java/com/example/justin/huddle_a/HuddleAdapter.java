package com.example.justin.huddle_a;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.HashMap;

/**
 * Created by Justin on 10/30/2015.
 */
public class HuddleAdapter extends BaseAdapter {
    Activity context;
    int layoutResourceId;
    private static LayoutInflater inflater = null;
    Huddle data[];

    public HuddleAdapter(Activity context, int layoutResourceId, Huddle[] data) {
        //super(context, layoutResourceId, data);
        this.context = context;
        this.layoutResourceId = layoutResourceId;
        this.data = data;
        inflater = (LayoutInflater)context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);

    }
    public int getCount() {
        return data.length;
    }

    public Huddle getItem(int position) {
        return data[position];
    }

    public long getItemId(int position) {
        return position;
    }

    public View getView(int position, View convertView, ViewGroup parent) {
        View fromthesix = convertView;
        if(convertView==null)
            fromthesix = inflater.inflate(R.layout.test, null);

        TextView title = (TextView)fromthesix.findViewById(R.id.title); // title
        TextView artist = (TextView)fromthesix.findViewById(R.id.description); // artist name
        TextView location = (TextView)fromthesix.findViewById(R.id.location); // duration
        TextView time = (TextView)fromthesix.findViewById(R.id.time);
        TextView initials = (TextView)fromthesix.findViewById(R.id.initials);
        TextView description = (TextView)fromthesix.findViewById(R.id.description);
        ImageView thumb_image=(ImageView)fromthesix.findViewById(R.id.list_image); // thumb image

        Huddle current = getItem(position);

        // Setting all values in listview
        title.setText(current.title);
        artist.setText(current.description);
        location.setText(current.location);
        time.setText(current.time);
        initials.setText(current.initials);
        description.setText(current.description);
        thumb_image.setImageResource(current.icon);

        //thumb_image.getDrawable(song.get(CustomizedListView.KEY_THUMB_URL), thumb_image);
        return fromthesix;
    }
}


