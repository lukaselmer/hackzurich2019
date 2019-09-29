package ch.christofbuechi.plantreemobile.ui.treehost.listFragment

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class FindTreehostViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "They need some help...\n...by planting trees"
    }
    val text: LiveData<String> = _text
}