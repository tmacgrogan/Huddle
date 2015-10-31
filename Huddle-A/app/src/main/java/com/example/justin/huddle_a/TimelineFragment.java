package com.example.justin.huddle_a;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.support.v4.app.ListFragment;

import java.lang.reflect.GenericArrayType;

public class TimelineFragment extends ListFragment {
    public TimelineFragment() {

    }

    public static TimelineFragment newInstance() {
        TimelineFragment myFragment = new TimelineFragment();

        Bundle args = new Bundle();
        //args.putInt("someInt", someInt);
       // myFragment.setArguments(args);

        return myFragment;
    }

@Override
public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Huddle[] stuff = Huddle.sampleInput();
        HuddleAdapter Adapter = new HuddleAdapter(getActivity(), R.layout.test,stuff);
        setListAdapter(Adapter);
}

@Override
public void onListItemClick(ListView l, View v, int position, long id) {

    l.animate();
}

    /*public class HuddleAdapter extends ArrayAdapter<String> {

        public HuddleAdapter(Context context, int layoutResourceId, String[] data) {
            super(context, layoutResourceId, data);
            this.layoutResourceId = layoutResourceId;
            this.context = context;
            this.data = data;
        }
    }*/
}
