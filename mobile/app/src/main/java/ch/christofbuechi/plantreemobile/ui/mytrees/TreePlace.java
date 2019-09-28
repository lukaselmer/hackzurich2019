package ch.christofbuechi.plantreemobile.ui.mytrees;

import com.google.android.libraries.maps.model.LatLng;

import org.jetbrains.annotations.NotNull;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;

class TreePlace {


    public final double lat;
    public final double lng;
    public String text;
    public int count;

    public TreePlace(double lat, double lng, String text, int count) {
        this.lat = lat;
        this.lng = lng;
        this.text = text;
        this.count = count;
    }

    public LatLng asLatLng() {
        return new LatLng(lat, lng);
    }

    public static List<TreePlace> getSamples() {
        return Arrays.asList(
                new TreePlace(47.389642, 8.516050, "Technopark", 3),
                new TreePlace(47.264298, 8.959720, "Goldingen", 15),
                new TreePlace(47.408296, 8.570579, "Schwamendingen Mitte", 20)
        );
    }

    @NotNull
    public String getTextForMarker() {
        return String.format(Locale.GERMAN, "%s - %d Trees", text, count);
    }
}
