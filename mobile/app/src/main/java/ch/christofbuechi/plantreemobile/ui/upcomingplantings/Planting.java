package ch.christofbuechi.plantreemobile.ui.upcomingplantings;

import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

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
    public static List<Planting> initializeData(){
        List<Planting> plantings = new ArrayList<>();

        DateTimeFormatter formatter = DateTimeFormat.forPattern("dd/MM/yyyy HH:mm:ss");

        plantings.add(new Planting("Zurich", 7, formatter.parseDateTime("03/10/2019 17:00:00").toDate() , "2.5h"));
        plantings.add(new Planting("Baden", 1, formatter.parseDateTime("17/10/2019 17:00:00").toDate() , "1h"));
        plantings.add(new Planting("Uster", 3,  formatter.parseDateTime("30/09/2019 17:00:00").toDate(), "4h"));
        return plantings;
    }
}
