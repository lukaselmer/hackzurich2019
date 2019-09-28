package ch.christofbuechi.plantreemobile.ui.upcomingplantings;

import android.content.Context;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Planting {

    public String location;
    public final Integer freeSpots;
    public final Date time;
    public final String duration;

    public Planting(String location, Integer freeSpots, Date time, String duration) {
        this.location = location;
        this.freeSpots = freeSpots;
        this.time = time;
        this.duration = duration;
    }

    // This method creates an ArrayList that has three Pantings objects
// Checkout the project associated with this tutorial on Github if
// you want to use the same images.
    public static List<Planting> initializeData(Context context){
        List<Planting> plantings = new ArrayList<>();


        plantings.add(new Planting("Schwamendingen, Zurich", 12,  new Date(), "2h"));
        plantings.add(new Planting("Baden", 1,  new Date(), "2h"));
        plantings.add(new Planting("Uster", 3,  new Date(), "2h"));
        return plantings;
    }
}
