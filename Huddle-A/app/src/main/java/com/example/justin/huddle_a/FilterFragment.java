package com.example.justin.huddle_a;

import android.app.Activity;
import android.app.Dialog;
import android.content.DialogInterface;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.app.Fragment;
import android.support.v4.app.DialogFragment;
import android.support.v7.app.AlertDialog;
import android.support.v7.internal.widget.ButtonBarLayout;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.Button;


public class FilterFragment extends DialogFragment {

    public interface FilterDialogListener {
        public void onDialogPositiveClick(DialogFragment dialog);
        public void onDialogNegativeClick(DialogFragment dialog);
    }
    // Use this instance of the interface to deliver action events
    FilterDialogListener mListener;
    Button ibutton,gbutton, sbutton, abutton, submit;

    // Override the Fragment.onAttach() method to instantiate the NoticeDialogListener
    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);

        // Verify that the host activity implements the callback interface
        try {
            // Instantiate the NoticeDialogListener so we can send events to the host
            mListener = (FilterDialogListener) activity;
        } catch (ClassCastException e) {
            // The activity doesn't implement the interface, throw exception
            throw new ClassCastException(activity.toString()
                    + " must implement NoticeDialogListener");
        }
    }

    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity(), android.R.style.Theme_Light_WallpaperSettings);

        // Get the layout inflater
        //this.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        LayoutInflater inflater = getActivity().getLayoutInflater();
        View toSet = inflater.inflate(R.layout.fragment_filter, null);
        ibutton = (Button)toSet.findViewById(R.id.ibutton_filter);
        gbutton = (Button)toSet.findViewById(R.id.gbutton_filter);
        sbutton = (Button)toSet.findViewById(R.id.sbutton_filter);
        abutton = (Button)toSet.findViewById(R.id.abutton_filter);
        submit = (Button)toSet.findViewById(R.id.submit_button_filter);
        submit.setBackgroundColor(Color.parseColor("#3F51B5"));
        ibutton.setOnClickListener(myhandler1);
        gbutton.setOnClickListener(myhandler2);
        sbutton.setOnClickListener(myhandler3);
        abutton.setOnClickListener(myhandler4);
        submit.setOnClickListener(submitList);
        // Inflate and set the layout for the dialog
        // Pass null as the parent view because its going in the dialog layout
        builder.setView(toSet);

        return builder.create();
    }
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
            dismiss();

        }
    };


}
