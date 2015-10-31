package com.example.justin.huddle_a;

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
        this.time = time;
        this.initials = initials;
    }
    public Huddle(int icon, String title, String location, String description, String time, String initials) {
        this(0, icon, title, location, description, time, initials);
    }
    public static Huddle[] sampleInput() {
        Huddle[] test = new Huddle[7];
        test[0] = new Huddle(0, "Tennis", "CRC", "Looking for someone to play tennis with me later today. We can hit balls and talk about the Williams sisters, or whatever people who play Tennis do.",
                "Today, 4:00pm", "VX");
        test[1] = new Huddle(0, "Pickup Soccer", "CRC", "blah", "Today, 5:00pm", "AS");
        test[2] = new Huddle(0, "Calc II HW5 Help", "CULC", "blah", "Tomorrow, 1:00pm", "MS");
        test[3] = new Huddle(0, "CS 2110 Recursive Assembly Help", "College of Computing", "blah", "Tomorrow, 9:00pm", "TM");
        test[4] = new Huddle(0, "Need Members for Hackathon Group", "Klaus Atrium", "blah", "Tomorrow, 6:00pm", "LW");
        test[5] = new Huddle(0, "Teach me how to swim", "Florida", "Sharks", "Today, 6:00am", "AK");
        test[6] = new Huddle(0, "Free juggling lessons", "Skiles","blahblahblah", "Tomorrow, 4:00pm", "JC");
        return test;
    }
}
