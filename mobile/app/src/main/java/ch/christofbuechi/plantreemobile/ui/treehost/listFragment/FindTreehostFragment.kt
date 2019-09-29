package ch.christofbuechi.plantreemobile.ui.treehost.listFragment

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
import ch.christofbuechi.plantreemobile.MainActivity
import ch.christofbuechi.plantreemobile.R
import ch.christofbuechi.plantreemobile.ui.treehost.Person


class FindTreehostFragment : Fragment() {

    private lateinit var findTreehostViewModel: FindTreehostViewModel

    private lateinit var recyclerView: RecyclerView
    private lateinit var viewAdapter: TreeHostAdapter
    private lateinit var viewManager: RecyclerView.LayoutManager


    override fun onStart() {
        val mainActivity = activity as MainActivity?
        mainActivity!!.setFabVisibility(View.GONE)
        super.onStart()
    }

    override fun onStop() {
        val mainActivity = activity as MainActivity?
        mainActivity!!.setFabVisibility(View.VISIBLE)
        super.onStop()
    }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {


        findTreehostViewModel =
            ViewModelProviders.of(this).get(FindTreehostViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_find_treehost, container, false)


        viewManager = LinearLayoutManager(context)

        var persons = Person.initializeData()
        viewAdapter = TreeHostAdapter(persons)

        recyclerView = root.findViewById<RecyclerView>(R.id.my_recycler_view).apply {
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
