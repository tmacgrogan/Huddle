package com.example.justin.huddle_a;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.support.v4.app.ListFragment;

import java.lang.reflect.GenericArrayType;
import java.util.ArrayList;

public class TimelineFragment extends ListFragment {
    static ArrayList<Huddle> stuff;
    static int pos;
    static HuddleAdapter Adapter;
    public TimelineFragment() {
    }

    public static TimelineFragment newInstance() {
        TimelineFragment myFragment = new TimelineFragment();
        Bundle args = new Bundle();
        return myFragment;
    }

@Override
public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //Huddle[] things = Huddle.sampleInput();
        stuff = Huddle.sampleInput();
        Adapter = new HuddleAdapter(getActivity(), R.layout.test,stuff);
        setListAdapter(Adapter);
}

@Override
public void onListItemClick(ListView l, View v, int position, long id) {
    super.onListItemClick(l,v,position,id);
    l.animate();
    pos = position;
    Intent next = new Intent(getActivity(), DetailActivity.class);
    startActivity(next);



}

}
