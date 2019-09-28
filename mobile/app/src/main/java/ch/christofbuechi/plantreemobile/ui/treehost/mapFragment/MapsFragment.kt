package ch.christofbuechi.plantreemobile.ui.treehost.mapFragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import ch.christofbuechi.plantreemobile.R
import ch.christofbuechi.plantreemobile.ui.tools.MapsViewModel

class MapsFragment : Fragment() {

    private lateinit var toolsViewModel: MapsViewModel

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        toolsViewModel =
            ViewModelProviders.of(this).get(MapsViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_maps, container, false)
        val textView: TextView = root.findViewById(R.id.maps_text)
        toolsViewModel.text.observe(this, Observer {
            textView.text = it
        })
        return root
    }
}