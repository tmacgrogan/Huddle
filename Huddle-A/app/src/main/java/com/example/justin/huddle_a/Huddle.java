package com.example.justin.huddle_a;

import java.util.ArrayList;

/**
 * Created by Justin on 10/30/2015.
 */
public class Huddle {
    int id;
    int icon;
    String title;
    String location;
    String description;
    String time;
    String initials;
    public Huddle(int id, int icon, String title, String location, String description, String time, String initials) {
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.location = location;
        this.description = description;
        this.time = time;
        this.initials = initials;
    }
    public Huddle(int icon, String title, String location, String description, String time, String initials) {
        this(0, icon, title, location, description, time, initials);
    }
    public static ArrayList<Huddle> sampleInput() {
        ArrayList<Huddle> test = new ArrayList<Huddle>();
        test.add(new Huddle(R.drawable.animal39, "Tennis", "CRC", "Looking for someone to play tennis with me later today. We can hit balls and talk about the Williams sisters, or whatever people who play Tennis do.",
                "Today, 4:00pm", "VX"));
        test.add(new Huddle(R.drawable.cat19, "Pickup Soccer", "CRC", "blahblahblahblahblahblah", "Today, 5:00pm", "AS"));
        test.add(new Huddle(R.drawable.deer4, "Calc II HW5 Help", "CULC", "blahblahblahblahblahblah", "Tomorrow, 1:00pm", "MS"));
        test.add(new Huddle(R.drawable.dolphin1, "CS 2110 Recursive Assembly Help", "College of Computing", "blah", "Tomorrow, 9:00pm", "TM"));
        test.add(new Huddle(R.drawable.elephant6, "Need Members for Hackathon Group", "Klaus Atrium", "blah", "Tomorrow, 6:00pm", "LW"));
        test.add(new Huddle(R.drawable.ewe2, "Teach me how to swim", "Florida", "Sharks", "Today, 6:00am", "AK"));
        test.add(new Huddle(R.drawable.pig4, "Free juggling lessons", "Skiles","blahblahblah", "Tomorrow, 4:00pm", "JC"));
        return test;
    }
}
