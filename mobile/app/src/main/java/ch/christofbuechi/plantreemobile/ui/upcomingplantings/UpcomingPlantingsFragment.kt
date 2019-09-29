package ch.christofbuechi.plantreemobile.ui.upcomingplantings

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import ch.christofbuechi.plantreemobile.R


class UpcomingPlantingsFragment : Fragment() {

    private lateinit var upcomingPlantingViewModel: UpcomingPlantingsViewModel

    private lateinit var recyclerView: RecyclerView
    private lateinit var viewAdapter: UpcomingPlantingsAdapter
    private lateinit var viewManager: RecyclerView.LayoutManager

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {


        upcomingPlantingViewModel =
            ViewModelProviders.of(this).get(UpcomingPlantingsViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_upcoming_plantings, container, false)


        val textView: TextView = root.findViewById(R.id.text_upcoming_plantings_title)

        viewManager = LinearLayoutManager(context)

        var plantings = Planting.initializeData()
        viewAdapter = UpcomingPlantingsAdapter(plantings)

        recyclerView = root.findViewById<RecyclerView>(R.id.upcoming_recyclerview).apply {
            // use this setting to improve performance if you know that changes
            // in content do not change the layout size of the RecyclerView
            setHasFixedSize(true)

            // use a linear layout manager
            layoutManager = viewManager

            // specify an viewAdapter (see also next example)
            adapter = viewAdapter

            return root
        }
    }
}
